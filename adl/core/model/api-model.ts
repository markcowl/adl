import { items, Dictionary } from '@azure-tools/linq';

import { Format, SerializationOptions, SerializationResult } from './format';
import { Path, trackTarget } from '@azure-tools/sourcemap';
import { Metadata } from './Metadata';
import { Element, ElementArray } from './element';
import { InternalData } from './internal-data';
import { HttpProtocol } from './http/protocol';
import { Resource } from './resource';
import { Schemas } from './schema';

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

export class ApiModel extends Element {
  internalData: Dictionary<InternalData> = {};

  metaData = new Metadata('');

  resources = new ElementArray<Resource>();

  schemas = new Schemas();

  http: HttpProtocol = new HttpProtocol();

  // aggregate: Aggregation;


  constructor() {
    super();
  }
  async save(): Promise<SerializationResult> {
    throw 'unimplemented';
  }

  /** 
   * creates a duplicate of this API
   */
  async clone() {
    throw 'unimplemented';
  }

  /**
   * Removes one or more API versions from the API
   *
   * @remarks When an API version is removed, elements that are marked '@since' will be pushed forward to the next API version, unless they are in the last version, at which point, they would be removed. 
   * 
   * @parameter apiVersions -- removes the definitions from this API.
   */
  async removeVersions() {
    throw 'unimplemented';
  }

  /** 
   * Adds a new API Version to this API 
   * 
   * @param apiVersion - the api version string to add
   */
  async addVersion() {
    throw 'unimplemented';
  }
}

export function check(instance: any, path = '') {

  return;
}