/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="declarations.d.ts" />

import { exists, isDirectory, isFile, mkdir, readdir, rmdir, writeFile } from '@azure-tools/async-io';
import { Delay } from '@azure-tools/tasks';
import { ChildProcess, spawn, SpawnOptions } from 'child_process';
import { promises, readFileSync } from 'fs';
import { resolve as npmResolvePackage } from 'npm-package-arg';
import { tmpdir } from 'os';
import * as pacote from 'pacote';
import { basename, delimiter, dirname, extname, isAbsolute, join, normalize, resolve } from 'path';
import * as semver from 'semver';
import { EventEmitter } from '../eventing/event-emitter';
import { Stopwatch } from '../support/stopwatch';

const copyFile = promises.copyFile;

async function copy(source: string, destination: string) {
  if (!await isDirectory(source)) {
    throw new Error(`Source ${source} is not a folder.`);
  }
  if (await isFile(destination)) {
    throw new Error(`Destination ${destination} is a file.`);
  }
  if (!await isDirectory(destination)) {
    await mkdir(destination);
  }
  const all = (await readdir(source)).map(async each => {
    const src = join(source, each);
    const dest = join(destination, each);
    if (await isFile(src)) {
      return copyFile(src, dest);
    }
    return copy(src, dest);
  });

  await Promise.all(all);
}

const rename = promises.rename;

function quoteIfNecessary(text: string): string {
  if (text && text.indexOf(' ') > -1 && text.charAt(0) != '"') {
    return `"${text}"`;
  }
  return text;
}
const nodePath = quoteIfNecessary(process.execPath);


function cmdlineToArray(text: string, result: Array<string> = [], matcher = /[^\s"]+|"([^"]*)"/gi, count = 0): Array<string> {
  text = text.replace(/\\"/g, '\ufffe');
  const match = matcher.exec(text);
  return match ? cmdlineToArray(text, result, matcher, result.push(match[1] ? match[1].replace(/\ufffe/g, '\\"') : match[0].replace(/\ufffe/g, '\\"'))) : result;
}

function getPathVariableName() {
  // windows calls it's path 'Path' usually, but this is not guaranteed.
  if (process.platform === 'win32') {
    let PATH = 'Path';
    Object.keys(process.env).forEach(function (e) {
      if (e.match(/^PATH$/i)) {
        PATH = e;
      }
    });
    return PATH;
  }
  return 'PATH';
}
async function realPathWithExtension(command: string): Promise<string | undefined> {
  const pathExt = (process.env.pathext || '.EXE').split(';');
  for (const each of pathExt) {
    const filename = `${command}${each}`;
    if (await isFile(filename)) {
      return filename;
    }
  }
  return undefined;
}

async function getFullPath(command: string, searchPath?: string): Promise<string | undefined> {
  command = command.replace(/"/g, '');
  const ext = extname(command);

  if (isAbsolute(command)) {
    // if the file has an extension, or we're not on win32, and this is an actual file, use it.
    if (ext || process.platform !== 'win32') {
      if (await isFile(command)) {
        return command;
      }
    }

    // if we're on windows, look for a file with an acceptable extension.
    if (process.platform === 'win32') {
      // try all the PATHEXT extensions to see if it is a recognized program
      const cmd = await realPathWithExtension(command);
      if (cmd) {
        return cmd;
      }
    }
    return undefined;
  }

  if (searchPath) {
    const folders = searchPath.split(delimiter);
    for (const each of folders) {
      const fullPath = await getFullPath(resolve(each, command));
      if (fullPath) {
        return fullPath;
      }
    }
  }

  return undefined;
}

/**
 * A Package is a representation of a npm package.
 *
 * Once installed, a Package is an Extension
 */
export class Package {
  /* @internal */ public constructor(public resolvedInfo: any, /* @internal */ public packageMetadata: any,/* @internal */ public extensionManager: ExtensionManager) {

  }

  get id(): string {
    return this.packageMetadata._from;
  }

  get name(): string {
    return this.packageMetadata.name;
  }

  get version(): string {
    return this.packageMetadata.version;
  }

  get source(): string {
    // work around bug that npm doesn't programatically handle exact versions.
    if (this.resolvedInfo.type === 'version' && this.resolvedInfo.registry === true) {
      return this.packageMetadata._spec + '*';
    }
    return this.packageMetadata._spec;
  }

  async install(force = false): Promise<Extension> {
    return this.extensionManager.installPackage(this, force);
  }

  get allVersions(): Promise<Array<string>> {
    return this.extensionManager.getPackageVersions(this.name);
  }

  get extension(): Promise<Extension | undefined> {
    // if the location is on disk, we can return that directly.

    if (this.resolvedInfo.type === 'directory') {
      return Promise.resolve(new Extension(this, this.resolvedInfo.fetchSpec));
    }

    return (async () => {
      const exts = await this.extensionManager.getInstalledExtensions();
      return exts.find(each => each.name === this.packageMetadata.name && each.version === this.packageMetadata.version);

    })();
  }
}

/**
 * Extension is an installed Package
 * @extends Package
 * */
export class Extension extends Package {
  /* @internal */ public constructor(pkg: Package, private installationPath: string) {
    super(pkg.resolvedInfo, pkg.packageMetadata, pkg.extensionManager);
  }
  /**
   * The installed location of the package.
   */
  public get location(): string {
    if (this.resolvedInfo?.type === 'directory') {
      return normalize(this.resolvedInfo.fetchSpec);
    }
    return normalize(`${this.installationPath}/${this.name}`);
  }
  /**
   * The path to the installed npm package (internal to 'location')
   */
  public get modulePath(): string {
    return this.location;
  }

  /**
   * the path to the package.json file for the npm packge.
   */
  public get packageJsonPath(): string {
    return join(this.modulePath, 'package.json');
  }

  /** the loaded package.json information */
  public get definition(): any {
    return require(this.packageJsonPath);
  }

  async remove(): Promise<void> {
    return this.extensionManager.removeExtension(this);
  }

  async start(enableDebugger = false): Promise<ChildProcess> {
    return this.extensionManager.start(this, enableDebugger);
  }

  load(): any {
    return this.extensionManager.load(this);
  }
}

/**
 * LocalExtension is a local extension that must not be installed.
 * @extends Extension
 * */
export class LocalExtension extends Extension {
  public constructor(pkg: Package, private extensionPath: string) {
    super(pkg, '');
  }
  public get location(): string {
    return this.extensionPath;
  }
  public get modulePath(): string {
    return this.extensionPath;
  }

  async remove(): Promise<void> {
    throw new Error('Cannot remove local extension. Lifetime not our responsibility.');
  }
}

interface MoreOptions extends SpawnOptions {
  onCreate?(cp: ChildProcess): void;
  onStdOutData?(chunk: any): void;
  onStdErrData?(chunk: any): void;
}

let _cli = '';
async function cli(): Promise<string> {
  if (!_cli) {
    for (const each of Object.keys(process.env)) {
      if (each.startsWith('npm_')) {
        delete process.env[each];
      }
    }
    // if we can see the cli on disk, that's ok
    const fname = resolve(`${__dirname}/../../yarn/cli.js`);
    if ((await isFile(fname))) {
      _cli = fname;
    }
    else {
      // otherwise, we might be in a 'static-linked' library and
      // we should try to load it and put a copy in $tmp somewhere.
      _cli = join(tmpdir(), 'yarn-cli.js');

      // did we copy it already?
      if ((await isFile(_cli))) {
        return _cli;
      }
      // no, let's copy it now.
      await writeFile(_cli, <string><any>readFileSync(fname));
    }
  }
  return _cli;
}


function execute(command: string, cmdlineargs: Array<string>, options: MoreOptions): Promise<{ stdout: string; stderr: string; error: Error | null; code: number }> {
  return new Promise((r, j) => {
    const cp = spawn(command, cmdlineargs, { ...options, stdio: 'pipe' });
    if (options.onCreate) {
      options.onCreate(cp);
    }

    options.onStdOutData ? cp.stdout.on('data', options.onStdOutData) : cp;
    options.onStdErrData ? cp.stderr.on('data', options.onStdErrData) : cp;

    let err = '';
    let out = '';
    cp.stderr.on('data', (chunk) => {
      err += chunk;
    });
    cp.stdout.on('data', (chunk) => {
      out += chunk;
    });
    cp.on('close', (code, signal) => r({ stdout: out, stderr: err, error: code ? new Error('Process Failed.') : null, code }));
  });
}

async function yarn(folder: string, cmd: string, ...args: Array<string>) {
  const cmdline = [
    await cli(),
    '--no-node-version-check',
    '--no-lockfile',
    '--ignore-engines',
    '--json',
    '--skip-integrity-check',
    '--registry',
    'https://registry.npmjs.org',
    cmd,
    ...args
  ];

  return execute(process.execPath, cmdline, { cwd: folder });
}

async function install(rootFolder: string, directory: string, pkgName: string, pkgIdentity: string) {
  // install uses Yarn to install the package to a temporary folder
  // and then we move the package folder to the target location
  // and the rest (dependencies) to the target/node_modules folder
  const targetFolder = directory.replace(/\\/g, '/');
  const installFolder = join(directory, 'node_modules');

  await mkdir(installFolder);

  const output = await yarn(directory,
    '--no-bin-links',
    '--cwd', installFolder,
    '--modules-folder', installFolder,
    'add',
    pkgIdentity);

  if (output.error) {
    throw Error(`Failed to install package '${pkgName}':'${pkgIdentity}' -- ${output.error}`);
  }
  const desiredPackage = join(installFolder, pkgName);
  await copy(desiredPackage, targetFolder);
}

async function fetchPackageMetadata(spec: string): Promise<any> {
  try {
    return await pacote.manifest(spec, {
      cache: `${tmpdir()}/cache`,
      registry: 'https://registry.npmjs.org',
      'full-metadata': true
    });
  } catch (er) {
    throw new Error(`Unresolved Package ${spec}`);
  }
}

function resolveName(name: string, version: string) {
  try {
    return npmResolvePackage(name, version);
  } catch (e) {
    throw new Error(`Invalid Package Identity ${name}:${version}`);
  }
}

interface Events {
  progress(message: string, value: number, msec: number): void;
  message(message: string, msec: number): void;
  error(message: string, msec: number): void;
}

export class ExtensionManager extends EventEmitter<Events> {
  stopwatch = new Stopwatch();

  progress(message: string, value: number) {
    this.emit('progress', message, value, this.stopwatch.total);
  }

  error(message: string) {
    this.emit('error', message, this.stopwatch.total);
  }
  message(message: string) {
    this.emit('message', message, this.stopwatch.total);
  }

  public static async Create(installationPath: string): Promise<ExtensionManager> {
    if (!await exists(installationPath)) {
      await mkdir(installationPath);
    }
    if (!await isDirectory(installationPath)) {
      throw new Error(`Extension folder '${installationPath}' is not a valid directory`);
    }
    return new ExtensionManager(installationPath);
  }

  async reset() {
    try {
      const flushCache = yarn(this.rootFolder, 'cache', 'clean', '--force');
      // nuke the folder
      await rmdir(this.rootFolder);

      await flushCache;
    } catch (e) {
      throw new Error(`Reset Error ${this.rootFolder} - ${e.message}`);
    }
  }

  private constructor(private rootFolder: string) {
    super();
  }

  async getPackageVersions(name: string): Promise<Array<string>> {
    const output = await yarn(process.cwd(), 'info', name, 'versions');
    const data = <Array<string>>JSON.parse(output.stdout).data;
    return data.sort((b, a) => semver.compare(a, b));
  }

  async findPackage(name: string, version = 'latest'): Promise<Package> {
    if (version.endsWith('.tgz') || version.endsWith('.pkg')) {
      // get the package metadata
      const pm = await fetchPackageMetadata(version);
      return new Package(pm, pm, this);
    }
    // version can be a version or any one of the formats that
    // npm accepts (path, targz, git repo)
    const resolved = resolveName(name, version);
    let resolvedName = resolved.raw;

    // get all matching package versions for that
    if (version.startsWith('~') || version.startsWith('^')) {
      const vers = (await this.getPackageVersions(resolved.raw)).filter(each => semver.satisfies(each, version));
      if (vers.length > 0) {
        resolvedName = `${resolved.name}@${vers[0]}`;
      }
    }
    // get the package metadata
    const pm = await fetchPackageMetadata(resolvedName);
    return new Package(resolved, pm, this);

  }

  async getInstalledExtension(name: string, version: string): Promise<Extension | null> {
    if (!semver.validRange(version)) {
      // if they asked for something that isn't a valid range, we have to find out what version
      // the target package actually is.
      const pkg = await this.findPackage(name, version);
      version = pkg.version;
    }

    const installed = await this.getInstalledExtensions();
    for (const each of installed) {

      if (name === each.name && semver.satisfies(each.version, version)) {
        return each;
      }
    }
    return null;
  }

  async getInstalledExtensions(): Promise<Array<Extension>> {
    const results = new Array<Extension>();

    // iterate thru the folders.
    // the folder name should have the pattern @ORG#NAME@VER or NAME@VER
    for (const folder of await readdir(this.rootFolder)) {
      const fullpath = normalize(join(this.rootFolder, folder));
      if (await isDirectory(fullpath)) {
        try {
          // const actualPath = org ? normalize(`${fullpath}/node_modules/${org}/${name}`) : normalize(`${fullpath}/node_modules/${name}`);

          const pm = await fetchPackageMetadata(fullpath);
          const ext = new Extension(new Package(null, pm, this), this.rootFolder);
          if (fullpath !== ext.location) {
            console.trace(`WARNING: Not reporting '${fullpath}' since its package.json claims it should be at '${ext.location}' (probably symlinked once and modified later)`);
            continue;
          }
          results.push(ext);
        } catch (e) {
          // ignore things that don't look right.
        }
      }
    }

    // each folder will contain a node_modules folder, which should have a folder by
    // in the node_modules folder there should be a folder by the name of the
    return results;
  }

  async installPackage(pkg: Package, force?: boolean, maxWait: number = 5 * 60 * 1000): Promise<Extension> {
    const origDir = process.cwd();

    this.progress(`Starting Installation ${pkg.name}`, 0);

    if (!await exists(this.rootFolder)) {
      await mkdir(this.rootFolder);
    }

    const extension = new Extension(pkg, this.rootFolder);

    try {
      // change directory
      process.chdir(this.rootFolder);
      this.progress(`Folder creation ${pkg.name}`, 25);


      if (await isDirectory(extension.location)) {
        if (!force) {
          // already installed
          // if the target folder is created, we're going to make the naive assumption that the package is installed. (--force will blow away)
          return extension;
        }

        // force removal first
        try {
          this.message(`Removing existing extension ${extension.location}`);
          await Delay(10);
          await rmdir(extension.location);
        } catch (e) {
          // no worries.
        }
      }

      // create the folder
      await mkdir(extension.location);

      // run YARN ADD for the package.
      this.message(`Installing ${pkg.name}, ${pkg.version}`);

      await install(this.rootFolder, extension.location, pkg.name, pkg.packageMetadata._resolved);
      this.message(`Package Install completed ${pkg.name}, ${pkg.version}`);

      return extension;
    } catch (e) {
      this.message(e);
      if (e.stack) {
        this.message(e.stack);
      }
      // clean up the attempted install directory
      if (await isDirectory(extension.location)) {
        this.message(`Cleaning up failed installation: ${extension.location}`);
        await Delay(10);
        await rmdir(extension.location);
      }

      throw new Error(`Package Installation Error ${pkg.name}:${pkg.version} -- ${e.message}\n${e.stack}`);
    } finally {
      this.progress('Completed', 100);
      process.chdir(origDir);
    }
  }

  async removeExtension(extension: Extension): Promise<void> {
    if (await isDirectory(extension.location)) {
      await rmdir(extension.location);
    }
  }

  /**
   * Loads an extension in-proc using node's 'require'
   * @param extension the extension to load (in-proc)
   */
  load(extension: Extension): any {
    return require(extension.modulePath);
  }

  async start(extension: Extension, enableDebugger = false): Promise<ChildProcess> {
    const PathVar = getPathVariableName();
    if (!extension.definition.scripts) {
      throw new Error(`Extension Missing Start Command: ${extension}`);
    }

    const script = enableDebugger && extension.definition.scripts.debug ? extension.definition.scripts.debug : extension.definition.scripts.start;

    // look at the extension for the
    if (!script) {
      throw new Error(`Extension Missing Start Command: ${extension}`);
    }
    const command = cmdlineToArray(script);

    if (command.length === 0) {
      throw new Error(`Extension Missing Start Command: ${extension}`);
    }
    // add each engine into the front of the path.
    const env = { ...process.env };

    // add potential .bin folders (depends on platform and npm version)
    env[PathVar] = `${join(extension.modulePath, 'node_modules', '.bin')}${delimiter}${env[PathVar]}`;
    env[PathVar] = `${join(extension.location, 'node_modules', '.bin')}${delimiter}${env[PathVar]}`;

    // find appropriate path for interpreter
    switch (command[0].toLowerCase()) {
      case 'node':
      case 'node.exe':
        command[0] = nodePath;
        break;
    }

    // ensure parameters requiring quotes have them.
    for (let i = 0; i < command.length; i++) {
      command[i] = quoteIfNecessary(command[i]);
    }
    // spawn the command via the shell (since that how npm would have done it anyway.)
    const fullCommandPath = await getFullPath(command[0], env[getPathVariableName()]);
    if (!fullCommandPath) {
      throw new Error(`Unable to resolve full path for executable '${command[0]}' -- (cmdline '${command.join(' ')}')`);
    }

    // == special case ==
    // on Windows, if this command has a space in the name, and it's not an .EXE
    // then we're going to have to add the folder to the PATH
    // and execute it by just the filename
    // and set the path back when we're done.
    if (process.platform === 'win32' && fullCommandPath.indexOf(' ') > -1 && !/.exe$/ig.exec(fullCommandPath)) {
      // preserve the current path
      const originalPath = process.env[PathVar];
      try {
        // insert the dir into the path
        process.env[PathVar] = `${dirname(fullCommandPath)}${delimiter}${env[PathVar]}`;

        // call spawn and return
        return spawn(basename(fullCommandPath), command.slice(1), { env, cwd: extension.modulePath, stdio: ['pipe', 'pipe', 'pipe'] });
      } finally {
        // regardless, restore the original path on the way out!
        process.env[PathVar] = originalPath;
      }
    }

    return spawn(fullCommandPath, command.slice(1), { env, cwd: extension.modulePath, stdio: ['pipe', 'pipe', 'pipe'] });
  }
}
