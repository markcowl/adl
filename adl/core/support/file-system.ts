import { isDirectory, isFile, readdir, rmdir } from '@azure-tools/async-io';
import { FileUriToPath, ReadUri, ResolveUri, WriteString } from '@azure-tools/uri';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { relative, resolve } from 'path';
import { cwd } from 'process';

export interface FileSystem {
  cwd: string;

  readonly extensionPath: string;
  readonly apiPath: string;

  readFile(pathOrRelativePath: string): Promise<string>;
  resolve(pathOrRelativePath: string): string;
  relative(absolutePath: string): string;

  writeFile(relativePath: string, data: string): Promise<void>;
  isDirectory(relativePath: string): Promise<boolean>;
  isFile(relativePath: string): Promise<boolean>;

  readdir(relativePath: string): Promise<Array<string>>;
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

    if (this.#cwd.startsWith('file:/')) {
      // it's a local path, so the extension and api paths are relative to this location
      this.#extPath = FileUriToPath(ResolveUri(this.#cwd, '.adl/.extensions'));
      this.#apiPath = FileUriToPath(ResolveUri(this.#cwd, '.adl/.apis'));
    } else {
      // it's not a local path?
      // use a temp folder for the extensions and api folders
      const tempfolder = uniqueTempFolder();
      this.#extPath = FileUriToPath(ResolveUri(tempfolder, '.adl/.extensions'));
      this.#apiPath = FileUriToPath(ResolveUri(tempfolder, '.adl/.apis'));

      process.on('beforeExit', async () => {
        // remember to remove them when we're done.
        await rmdir(tempfolder);
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
    if (relativePath.indexOf(':') > -1) {
      throw new Error(`Relative paths may not contain ':' characters (${relativePath}) `);
    }
    if (!this.#cwd.startsWith('file:/')) {
      throw new Error('Writing only supported on projects loaded from file:// uris');
    }
    const fullPath = ResolveUri(this.#cwd, relativePath);
    if (!fullPath.startsWith(this.#cwd)) {
      throw new Error(`Path (${fullPath}) not inside the project folder (${this.#cwd})`);
    }


    return WriteString(FileUriToPath(fullPath), data);
  }
  async isDirectory(relativePath: string): Promise<boolean> {
    return await isDirectory(FileUriToPath(ResolveUri(this.#cwd, relativePath)));
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
  async readdir(relativePath: string): Promise<Array<string>> {
    const uri = this.resolve(relativePath);
    if (uri.startsWith('file:/')) {
      const path = FileUriToPath(uri);
      return readdir(path);
    }
    // can't do remote filesystem readdir at the moment.
    return [];
  }

}