import { FileSystem } from '@azure-tools/adl.core';
import { rmdir } from '@azure-tools/async-io';
import { FileUriToPath, ResolveUri } from '@azure-tools/uri';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { relative } from 'path';
import { cwd } from 'process';
import { Connection } from 'vscode-languageserver';
import { IsDirectoryRequest, IsFileRequest, ReadDirectoryRequest, ReadFileRequest, WriteFileRequest } from './requestTypes';

function uniqueTempFolder(): string {
  return mkdtempSync(`${tmpdir()}/adl-temp$`);
}

export class ServerFileSystem implements FileSystem {
  
  connection: Connection;
  #cwd!: string;
  #extPath!: string;
  #apiPath!: string;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  get cwd(): string {
    return this.#cwd;
  }

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

  get apiPath(): string {
    return this.#apiPath;
  }

  get extensionPath(): string {
    return this.#extPath;
  }

  resolve(pathOrRelativePath: string): string {
    return ResolveUri(this.cwd, pathOrRelativePath);
  }

  relative(absolutePath: string): string {
    return relative(this.cwd, absolutePath);
  }

  async writeFile(relativePath: string, data: string): Promise<void> {
    return this.connection.sendRequest(WriteFileRequest.type, { relativePath, data }); 
  }
  
  async isDirectory(relativePath: string): Promise<boolean>{
    return  this.connection.sendRequest(IsDirectoryRequest.type, { relativePath } );
     
  }

  async isFile(relativePath: string): Promise<boolean> {
    return this.connection.sendRequest(IsFileRequest.type, { relativePath });
    
  } 

  async readFile(pathOrRelativePath: string): Promise<string> {
    return this.connection.sendRequest(ReadFileRequest.type, { pathOrRelativePath});
    
  } 

  async readDirectory(relativePath: string): Promise<Array<string>> {
    return this.connection.sendRequest(ReadDirectoryRequest.type, { relativePath });
  } 
}
