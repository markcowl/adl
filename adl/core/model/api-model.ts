import { exists, isFile, mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import { Dictionary, values } from '@azure-tools/linq';
import { isAnonymous, isProxy, Path, SourceMap, TargetMap, use, valueOf } from '@azure-tools/sourcemap';
import { dirname, join } from 'path';
import { EnumDeclaration, IndentationText, NewLineKind, Node, Project, QuoteKind, SourceFile } from 'ts-morph';
import { getNode, referenceTo } from '../support/typescript';
import { Attic } from './element';
import { SerializationResult } from './format';
import { HttpProtocol } from './http/protocol';
import { InternalData } from './internal-data';
import { Metadata } from './metadata';
import { Resource } from './resource';
import { Schemas } from './schema/schemas';
import { Identity } from './types';
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

export class ApiModel {
  #project: Project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
      newLineKind: NewLineKind.LineFeed,
      quoteKind: QuoteKind.Single,
    },
  });

  #anonymous = this.#project.createDirectory('anonymous');
  #alias = this.#project.createDirectory('aliases');
  #models = this.#project.createDirectory('models');
  #enums = this.#project.createDirectory('enums');
  #operations = this.#project.createDirectory('operations');
  #resources = this.#project.createDirectory('resources');


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
    (<any>this.#project).api = this;
  }

  track(targetMap: TargetMap, sourceMap: SourceMap) {
    // temporary -- use up everything that we are given in the source map.
    for (const each of values(sourceMap)) {
      use(each);
    }
  }

  versionInfo = new Array<VersionInfo>();

  attic?: Attic;

  addInternalData(key: string, internalData: InternalData): void {
    // ...
  }

  async saveADL(path: string, cleanDirectory = true) {
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

    const format = {
      indentSize: 1,
    };
    // print each file and save it.
    await Promise.all(
      this.project.getSourceFiles().map(async (each) => {
        if (this.isFileAnonymous(each)) {
        //  return;
        }
        each.formatText(format);
        each.organizeImports(format);

        const filename = join(path, each.getFilePath());

        const folder = dirname(filename);
        await mkdir(folder);

        await writeFile(filename, each.print().
          //replace(/\*\/\s*\/\*\*\s*/g, '').
          replace(/^(\s*\/\*)/g, '\n$1')
        );

      }));
  }

  getNode(path: Path): Node | undefined {
    return getNode(path, this.project);
  }


  getEnumFile(name: string): SourceFile {
    if (isProxy(this)) {
      return valueOf(this).getEnumFile(name);
    }
    if (isAnonymous(name)) {
      return this.getAnonymousFile(name);
    }
    const filename = `${name}.ts`;
    return this.#enums.getSourceFile(filename) || this.#enums.createSourceFile(filename);
  }

  getObjectSchemaFile(name: Identity): SourceFile {
    if (isProxy(this)) {
      return valueOf(this).getObjectSchemaFile(name);
    }
    if (isAnonymous(name)) {
      return this.getAnonymousFile(name.name);
    }
    const filename = `${name}.ts`;
    return this.#models.getSourceFile(filename) || this.#models.createSourceFile(filename);
  }

  getEnum(name: string) {
    name = valueOf(name);
    let result: EnumDeclaration | undefined;

    for (const file of this.project.getSourceFiles()) {
      const result = file.getEnum(name);
      if (result) {
        return referenceTo(result);
      }
    }

    return undefined;
  }

  getAliasSourceFile(name: string): SourceFile {
    if (isProxy(this)) {
      return valueOf(this).getAliasSourceFile(name);
    }

    if (isAnonymous(name)) {
      return this.getAnonymousFile(name);
    }

    const filename = `${name}.ts`;
    return this.#alias.getSourceFile(filename) || this.#alias.createSourceFile(filename);
  }

  getAnonymousFile(name: string): SourceFile {
    if (isProxy(this)) {
      return valueOf(this).getAnonymousFile(name);
    }  

    const filename = `${name.replace(/[^\w]+/g, '_')}.ts`;
    return this.#anonymous.getSourceFile(filename) || this.#anonymous.createSourceFile(filename);
  }

  isFileAnonymous( sourceFile: SourceFile ): boolean{
    if (isProxy(this)) {
      return valueOf(this).isFileAnonymous(sourceFile);
    }
    return this.#anonymous.isAncestorOf(sourceFile);
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
  }
}
