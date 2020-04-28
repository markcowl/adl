import { CreateFolderUri, ReadUri, ResolveUri } from '@azure-tools/uri';
import { resolve } from 'path';

export interface FileSystem {
  cwd: string;
  readFile(pathOrRelativePath: string): Promise<string>;
  resolve(pathOrRelativePath: string): string;
}

/** supports file://, http:// and https://  */
export class UrlFileSystem implements FileSystem {
  cwd: string;
  get githubAuthToken() {
    return process.env['github-auth-token'] || process.env['githubauthtoken'] || undefined;
  }
  constructor(baseFolder: string = resolve()) {
    this.cwd = CreateFolderUri(baseFolder);
  }
  resolve(pathOrRelativePath: string): string {
    return ResolveUri(this.cwd, pathOrRelativePath);
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