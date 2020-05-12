import { Dictionary } from '@azure-tools/linq';
import { Project } from 'ts-morph';
import { SerializationResult } from './format';
import { HttpProtocol } from './http/protocol';
import { InternalData } from './internal-data';
import { Metadata } from './metadata';
import { Resource } from './resource';
import { Schemas } from './schema';
import { VersionInfo } from './version-info';


export interface FileInfo {
  filename: string;

}

export type Version = string;

/*
function TypeInfo<U extends new (...args: any) => any>(type: U) {
  return <ySchema.CustomTag> {
    identify: (v: any) => v instanceof type,
    tag: `!${type.name}`,
    resolve: (doc: Document, cst: CST.Node): AST.Node => { 
      
     },
    stringify: (item: AST.Node, ctx: ySchema.StringifyContext, onComment?: () => void, onChompKeep?: () => void): string => { return <any>undefined; }

  };// (`!${type.name}`, { kind: 'mapping', instanceOf: type, construct: (i) => Object.setPrototypeOf(i, type.prototype) });
}
*/

export class ApiModel extends Project {
  internalData: Dictionary<InternalData> = {};

  metaData = new Metadata('');

  resources = new Array<Resource>();

  schemas = new Schemas();

  http: HttpProtocol = new HttpProtocol();

  // aggregate: Aggregation;


  constructor() {
    super();
  }

  versionInfo = new Array<VersionInfo>();

  addInternalData(key: string, internalData: InternalData): void {
  }
}

export class None {
  async __save(): Promise<SerializationResult> {
    throw 'unimplemented';
  }

  /** 
   * creates a duplicate of this API
   */
  async __clone() {
    throw 'unimplemented';
  }

  /**
   * Removes one or more API versions from the API
   *
   * @remarks When an API version is removed, elements that are marked '@since' will be pushed forward to the next API version, unless they are in the last version, at which point, they would be removed. 
   * 
   * @parameter apiVersions -- removes the definitions from this API.
   */
  async __removeVersions() {
    throw 'unimplemented';
  }

  /** 
   * Adds a new API Version to this API 
   * 
   * @param apiVersion - the api version string to add
   */
  async __addVersion() {
    throw 'unimplemented';
  }}
