import { RequestType } from 'vscode-languageclient';

interface ReadFileParams {
  pathOrRelativePath: string;
}

namespace ReadFileRequest {
 export const type = new RequestType<ReadFileParams,string, void, void>('adl/readFile'); 
}

interface WriteFileParams {
  relativePath: string; 
  data: string;
}

namespace WriteFileRequest {
  export const type = new RequestType<WriteFileParams, void, void, void>('adl/writeFile');
}

interface IsDirectoryParams {
  relativePath: string;
}

namespace IsDirectoryRequest {
  export const type = new RequestType<IsDirectoryParams, boolean, void, void>('adl/isDirectory');
}

interface IsFileParams {
  relativePath: string;
}

namespace IsFileRequest {
  export const type = new RequestType<IsFileParams, boolean, void, void>('adl/isFile');
}

interface ReadDirectoryParams {
  relativePath: string;
}

namespace ReadDirectoryRequest {
  export const type = new RequestType<IsDirectoryParams, Array<string>, void, void>('adl/readDirectory');
}

