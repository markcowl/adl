import { FileSystem } from '@azure-tools/adl.core';
import { ResolveUri } from '@azure-tools/uri';
import { relative } from 'path';
import { Connection } from 'vscode-languageserver';
import { IsDirectoryRequest, IsFileRequest, ReadDirectoryRequest, ReadFileRequest, WriteFileRequest } from './requestTypes';

export class ServerFileSystem implements FileSystem {
  
  connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  get cwd(): string {
    return this.cwd;
  }

  set cwd(path: string) {
    this.cwd = path;
  }

  get apiPath(): string {
    return this.apiPath;
  }

  set apiPath(path: string) {
    this.apiPath = path;
  }

  get extensionPath(): string {
    return this.extensionPath;
  }

  set extensionPath(path: string) {
    this.extensionPath = path;
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
