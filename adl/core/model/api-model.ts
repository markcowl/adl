import { exists, isFile, mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import { Dictionary } from '@azure-tools/linq';
import { valueOf } from '@azure-tools/sourcemap';
import { dirname, join } from 'path';
import { IndentationText, Project, QuoteKind } from 'ts-morph';
import { Attic } from './element';
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
    super({
      useInMemoryFileSystem: true, manipulationSettings: {
        indentationText: IndentationText.TwoSpaces,
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
        quoteKind: QuoteKind.Single,
      }
    });
    
  }

  versionInfo = new Array<VersionInfo>();

  attic?: Attic;

  addInternalData(key: string, internalData: InternalData): void {
    // ...
  }

  async saveADL(path: string, cleanDirectory = true)  {
    // save any open files to memory
    await valueOf(this).save();

    // remove folder if required
    if (await exists(path)) {
      if (await isFile(path)) {
        throw Error('Target path is a file.');
      }
      if (cleanDirectory) {
        await rmdir(path);
      }
    }

    // ensure folder is created 
    await mkdir(path);

    // print each file and save it.
    await Promise.all(
      valueOf(this).getSourceFiles().map( async (each) => {
        each.formatText({
          indentSize: 2
        });
      
        const filename = join(path, each.getFilePath());

        const folder = dirname(filename);
        await mkdir(folder);

        await writeFile(filename, each.print().
          replace(/\*\/\s*\/\*\*\s*/g, ''));

        
      }));
    
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
