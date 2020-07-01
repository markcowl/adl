import { RequestType } from 'vscode-languageserver';

export interface ReadFileParams {
  pathOrRelativePath: string;
}

export namespace ReadFileRequest {
 export const type = new RequestType<ReadFileParams,string, void, void>('adl/readFile'); 
}

export interface WriteFileParams {
  relativePath: string; 
  data: string;
}

export namespace WriteFileRequest {
  export const type = new RequestType<WriteFileParams, void, void, void>('adl/writeFile');
}

export interface IsDirectoryParams {
  relativePath: string;
}

export namespace IsDirectoryRequest {
  export const type = new RequestType<IsDirectoryParams, boolean, void, void>('adl/isDirectory');
}

export interface IsFileParams {
  relativePath: string;
}

export namespace IsFileRequest {
  export const type = new RequestType<IsFileParams, boolean, void, void>('adl/isFile');
}

export interface ReadDirectoryParams {
  relativePath: string;
}

export namespace ReadDirectoryRequest {
  export const type = new RequestType<IsDirectoryParams, Array<string>, void, void>('adl/readDirectory');
}

