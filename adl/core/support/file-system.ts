import { isDirectory, isFile, rmdir } from '@azure-tools/async-io';
import { FileUriToPath, ReadUri, ResolveUri, WriteString } from '@azure-tools/uri';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { relative, resolve } from 'path';
import { cwd } from 'process';
import { EventEmitter } from '../eventing/event-emitter';
import { Stopwatch } from './stopwatch';

interface Events {
  warning(message: string, offendingNode: any, msec: number): void;
  error(message: string, offendingNode: any, msec: number): void;
  loaded(path: string, duration: number, msec: number): void;
  parsed(path: string, duration: number, msec: number): void;
  attic(path: string, duration: number, msec: number): void;
  processed(path: string, duration: number, msec: number): void;
}

export class Host extends EventEmitter<Events> {
  stopwatch = new Stopwatch();
  warning(message: string, offendingNode: any) {
    this.emit('warning', message, offendingNode, this.stopwatch.total);
  }
  error(message: string, offendingNode: any) {
    this.emit('error', message, offendingNode, this.stopwatch.total);
  }
  loaded(path: string, duration: number): void {
    this.emit('loaded', this.fileSystem.relative(path), duration, this.stopwatch.total);
  }
  parsed(path: string, duration: number): void {
    this.emit('parsed', this.fileSystem.relative(path), duration, this.stopwatch.total);
  }
  attic(path: string, duration: number): void {
    this.emit('attic', this.fileSystem.relative(path), duration, this.stopwatch.total);
  }
  processed(path: string, duration: number): void {
    this.emit('processed', this.fileSystem.relative(path), duration, this.stopwatch.total);
  }

  constructor(public fileSystem: FileSystem) {
    super();
  }
}

export interface FileSystem {
  cwd: string;

  readonly extensionPath: string;
  readonly apiPath: string;

  readFile(pathOrRelativePath: string): Promise<string>;
  resolve(pathOrRelativePath: string): string;
  relative(absolutePath: string): string;

  writeFile(relativePath: string, data: string): Promise<void>;
  isDirectory( relativePath: string):  Promise<boolean>;
  isFile(relativePath: string): Promise<boolean>;
}

function uniqueTempFolder(): string {
  return mkdtempSync(`${tmpdir()}/adl-temp$`);
}

/** supports file://, http:// and https://  */
export class UrlFileSystem implements FileSystem {
  #cwd!: string;
  #extPath!: string;
  #apiPath!: string;

  set cwd(path: string) {
    this.#cwd = ResolveUri(cwd(), `${path}/`);

    if( this.#cwd.startsWith('file:/') )  {
      // it's a local path, so the extension and api paths are relative to this location
      this.#extPath = FileUriToPath( ResolveUri(this.#cwd,'.adl/.extensions')) ;
      this.#apiPath = FileUriToPath( ResolveUri(this.#cwd, '.adl/.apis') );
    } else {
      // it's not a local path?
      // use a temp folder for the extensions and api folders
      const tempfolder = uniqueTempFolder();
      this.#extPath = FileUriToPath(ResolveUri(tempfolder, '.adl/.extensions'));
      this.#apiPath = FileUriToPath(ResolveUri(tempfolder, '.adl/.apis'));
      
      process.on('beforeExit',()=> {
        // remember to remove them when we're done.
        rmdir(tempfolder);
      });
    }
  }

  get cwd(): string {
    return this.#cwd;
  }

  get extensionPath() {
    return this.#extPath;
  }

  get apiPath() {
    return this.#apiPath;
  }

  get githubAuthToken() {
    return process.env['github-auth-token'] || process.env['githubauthtoken'] || undefined;
  }
  constructor(baseFolder: string = resolve()) {
    this.cwd = baseFolder;
  }

  async writeFile(relativePath: string, data: string): Promise<void> {
    if (relativePath.indexOf(':') > -1 ) {
      throw new Error(`Relative paths may not contain ':' characters (${relativePath}) `);
    }
    if(!this.#cwd.startsWith('file:/')) {
      throw new Error('Writing only supported on projects loaded from file:// uris');
    }
    const fullPath = ResolveUri(this.#cwd,relativePath);
    if (!fullPath.startsWith(this.#cwd)) {
      throw new Error(`Path (${fullPath}) not inside the project folder (${this.#cwd})`);
    }
    return WriteString(fullPath, data);
  }
  async isDirectory(relativePath: string): Promise<boolean> {
    return isDirectory( FileUriToPath(ResolveUri(this.#cwd, relativePath)));
  }
  async isFile(relativePath: string): Promise<boolean> {
    return isFile(FileUriToPath(ResolveUri(this.#cwd, relativePath)));
  }
  resolve(pathOrRelativePath: string): string {
    return ResolveUri(this.cwd, pathOrRelativePath);
  }
  relative(absolutePath: string): string {
    return relative(this.cwd, absolutePath);
  }
  async readFile(pathOrRelativePath: string): Promise<string> {
    const uri = this.resolve(pathOrRelativePath);

    const headers: { [key: string]: string } = {};

    // check for GitHub OAuth token
    if (this.githubAuthToken && uri.startsWith('https://raw.githubusercontent.com')) {
      // console.log(`Used GitHub authentication token to request '${uri}'.`);
      headers.authorization = `Bearer ${this.githubAuthToken}`;
    }
    return ReadUri(uri, headers);
  }

}