import { Dictionary } from '@azure-tools/linq';
interface SourceLink {
  file: string;
  path: Array<string>;
}

interface FileInfo {
  filename: string;

}

interface MetaData {
  fileInfo?: FileInfo;

}


/**  */
interface Element {
  metadata?: Dictionary<MetaData>;

}

interface Schema extends Element {

}

interface ApiModel {
  schemas?: Array<Schema>;

}
