import { exists, isFile, mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import { Dictionary, linq } from '@azure-tools/linq';
import { isAnonymous, isProxy, valueOf } from '@azure-tools/sourcemap';
import { dirname, join } from 'path';
import { IndentationText, Project, QuoteKind, SourceFile } from 'ts-morph';
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

export class ApiModel  {
  #project: Project;

  get project() {
    return this.#project;
  }
  internalData: Dictionary<InternalData> = {};

  metaData = new Metadata('');

  resources = new Array<Resource>();

  schemas = new Schemas();

  http: HttpProtocol = new HttpProtocol();

  // aggregate: Aggregation;


  constructor() {
    this.#project  = new Project({
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
    await this.project.save();

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
      this.project.getSourceFiles().map( async (each) => {
        if( each === this.anonymousFile) {
          return;
        }
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

  getEnumFile(name: string): SourceFile {
    if (isProxy(this)) {
      return valueOf(this).getEnumFile(name);
    }
    if( isAnonymous(name)) {
      return this.anonymousFile;
    }
    const filename = `${name}.ts`;
    return  this.project.getSourceFile(filename) ||  this.project.createSourceFile(filename);
  }

  getEnum(name: string ) {
    return linq.values(this.project.getSourceFiles()).selectMany( each => each.getEnums() ).where( each => each.getName() === name).toArray();
  }

  #aliasFile?: SourceFile;
  getAliasSourceFile(): SourceFile {
    if( isProxy(this) ) {
      return valueOf(this).getAliasSourceFile();
    }
    return this.#aliasFile || (this.#aliasFile = this.project.createSourceFile('aliases.ts'));
  }
  

  #anonymousFile?: SourceFile;
  get anonymousFile(): SourceFile {
    if (isProxy(this)) {
      return valueOf(this).anonymousFile;
    }
    return this.#anonymousFile || (this.#anonymousFile = this.project.createSourceFile('anonymous.ts'));
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
