import { exists, rmdir } from '@azure-tools/async-io';
import { Dictionary, items, keys, linq } from '@azure-tools/linq';
import { isAnonymous, Path, valueOf } from '@azure-tools/sourcemap';
import { FileUriToPath } from '@azure-tools/uri';
import { fail } from 'assert';
import { join } from 'path';
import { Directory, EnumDeclaration, IndentationText, InterfaceDeclaration, NewLineKind, Node, Project, QuoteKind, SourceFile, SyntaxKind, TypeAliasDeclaration } from 'ts-morph';
import { Document, parseDocument } from 'yaml';
import { YAMLSeq } from 'yaml/types';
import { Activation } from '../eventing/activation';
import { EventEmitter } from '../eventing/event-emitter';
import { EventListener } from '../eventing/event-listener';
import { Linter } from '../linter/linter';
import { ExtensionManager } from '../plugin/plugin-manager';
import { ImportExtension } from '../serialization/openapi/import-extensions';
import { getTags, hasTag } from '../support/doc-tag';
import { FileSystem, UrlFileSystem } from '../support/file-system';
import { ProcessingMessages } from '../support/message-channels';
import { referenceTo } from '../support/typescript';
import { Visitor } from '../support/visitor';
import { HttpProtocol } from './http/protocol';
import { ParameterElement, ResponseCollection, ResponseElement, ResultElement } from './operation';
import { ProjectData } from './project/project-data';
import { Protocol } from './project/protocol';
import { AliasType } from './schema/alias';
import { EnumType } from './schema/enum';
import { ModelType } from './schema/model';
import { Primitives } from './schema/primitive';
import { Folders, Identity } from './types';
import { Declaration } from './typescript/reference';

export function isModelTypeAlias(declaration: TypeAliasDeclaration) {
  if (hasTag(declaration, 'model')) {
    return true;
  }

  // if this is an alias over a model type or primitive
  // or it is

  return false;
}

export function isResponseCollectionTypeAlias(declaration: TypeAliasDeclaration): boolean {
  if (hasTag(declaration, 'responseCollection')) {
    return true;
  }

  // type aliases that are tupletypes are responsecollections.
  const typeNode = declaration.getTypeNode();
  if (typeNode && Node.isTupleTypeNode(typeNode)) { //?.getKind() === SyntaxKind.TupleType
    // they must only have children that are either functionTypeNode or TypeReferenceNode
    // if they have anything else, ignore them. 
    return !(typeNode.getElementTypeNodes().find(each => !(Node.isFunctionTypeNode(each) || Node.isTypeReferenceNode(each))));
  }
  return false;
}

export function isResponseTypeAlias(declaration: TypeAliasDeclaration) {
  if (hasTag(declaration, 'response')) {
    return true;
  }

  // type aliases that are function types are response declarations.
  return (declaration.getTypeNode()?.getKind() === SyntaxKind.FunctionType);
}

export function isResultTypeAlias(declaration: TypeAliasDeclaration) {
  if (hasTag(declaration, 'result')) {
    return true;
  }

  return false;
}

export function isResourceTypeAlias(declaration: TypeAliasDeclaration) {
  return false;
}

export function isResourceInterfaceType(declaration: InterfaceDeclaration) {
  return false;
}

export function isOperationGroupInterfaceType(declaration: InterfaceDeclaration) {
  // should only have operations
  if (hasTag(declaration, 'http')) {
    return true;
  }

  // operation groups have methods.
  if (declaration.getMethods().length > 0) {
    return true;
  }
  return false;
}

export function isResultInterfaceType(declaration: InterfaceDeclaration) {
  return false;
}

export function isResponseInterfaceType(declaration: InterfaceDeclaration) {
  return false;
}

export function isModelInterface(declaration: InterfaceDeclaration) {
  // interfaces that identify as @model are models
  if (hasTag(declaration, 'model')) {
    return true;
  }
  // inference based on what it looks like it is.

  // model interfaces should
  // - may have constructors (used for versioning)

  // - may not have methods
  if (declaration.getMethods().length > 0) {
    return false;
  }

  return true;
}
/*
type Queryable<T extends string,TResult >  = {
  readonly [key in T]: Array<TResult>;
}
const someFiles = <Files><any>{};
const x = someFiles.query<ModelType>('interfaces');
*/


export class Files {
  readonly api: ApiModel;
  readonly files!: Array<SourceFile>;

  protected constructor(api?: ApiModel, sourceFiles?: Array<SourceFile>) {
    if (api) {
      this.files = sourceFiles || api.files;
    }
    this.api = api || (this instanceof ApiModel ? this : fail('requires api model in constructor'));

    // when this gets constructed, we have to emit an event to allow extensions to add queries to the instance
    // we need a query function for the extension
    // and then we can bind it as a property so that others can use it.
    // Object.defineProperty(this, 'AzureResource', {get: ()=>this.interfaces});
  }

  query<T>(propertyName: string): Array<T> {
    return (Object.getOwnPropertyNames(this).indexOf(propertyName) > -1 ? (<any>this)[propertyName] : []);
  }

  where(predicate: (file: SourceFile) => boolean): Files {
    return new Files(this.api, this.files.filter(predicate));
  }

  /**
   * returns all the modelTypes in the API
   */
  get modelTypes() {
    return this.files.map(each => each.getInterfaces().filter(isModelInterface)).flat().map(each => new ModelType(each));
  }

  /**
   * returns all the enumTypes in the API
   */
  get enumTypes() {
    return this.files.map(each => each.getEnums()).flat().map(each => new EnumType(each));
  }

  /**
   * returns all the aliasTypes in the API
   */
  get aliasTypes(): Array<AliasType> {
    return this.files.map(each => each.getTypeAliases().filter(isModelTypeAlias)).flat().map(each => new AliasType(each));
  }

  /**
   * Returns all the operation groups for all protocols
   */
  get operationGroups() {
    return linq.values(this.protocols).selectMany(protocol => protocol.operationGroups).toArray();
  }

  /**
   * returns all the protocols for this API
   */
  get protocols(): Dictionary<Protocol<any>> {
    return linq.items(this.api.protocols).toDictionary(([key]) => key, ([, protocol]) => protocol.from(this.files));
  }

  /**
   * Gets all the globally declared response collections across all the protocols
   */
  get responseCollections(): Array<Declaration<ResponseCollection>> {
    // this.files.map( each => each.getTypeAliases()).filter(isResponseCollection)).flat().map(each => new ResponseCollectionAlias(each))
    return linq.values(this.protocols).selectMany(protocol => protocol.responseCollections).toArray();
  }

  /**
   * Gets all the globally declared responses across all the protocols
   */
  get responses(): Array<Declaration<ResponseElement>> {
    return linq.values(this.protocols).selectMany(protocol => protocol.responses).toArray();
  }

  /**
   * Gets all the globally declared results across all the protocols
   */
  get results(): Array<Declaration<ResultElement>> {
    return linq.values(this.protocols).selectMany(protocol => protocol.results).toArray();
  }

  /**
   * Gets all the globally parameters across all the protocols
   */
  get parameters(): Array<Declaration<ParameterElement>> {
    return linq.values(this.protocols).selectMany(protocol => protocol.parameters).toArray();
  }
}

async function readFiles(fileSystem: FileSystem, folder: string, directory: Project | Directory) {
  const all = new Array<Promise<any>>();

  const entries = await fileSystem.readDirectory(folder);
  for (const each of entries) {
    const fullPath = join(folder, each);
    if (each.endsWith('.ts') && await fileSystem.isFile(fullPath)) {
      directory.createSourceFile(each, await fileSystem.readFile(fullPath));
    }
    if (each !== '.adl' && await fileSystem.isDirectory(fullPath)) {
      const dir = directory.createDirectory(each);
      all.push(readFiles(fileSystem, fullPath, dir));
    }
  }
  // wait for everything below to here to finish.
  await Promise.all(all);
}

interface ProtocolEvents {
  InitializeProtocol(apiModel: ApiModel): Protocol;
}

class Protocols extends EventEmitter<ProtocolEvents> {
  constructor(private apiModel: ApiModel) {
    super();
  }
  intializeProtocol(): Iterable<Protocol> {
    return [... this.iterEmit('InitializeProtocol', this.apiModel)].select(each => each.result);
  }

}

export class ApiModel extends Files {
  /**
   * when creating constructs that lack a name, we can give them a unique number
   */
  #counter = 0;

  /**
   * protocols connected to this model
   */
  #protocols = new Dictionary<Protocol<any>>();

  /**
   * typescript project for this model
   * 
   * provides access to the ts project for this api.
   * @internal
   */
  readonly project: Project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
      newLineKind: NewLineKind.LineFeed,
      quoteKind: QuoteKind.Single,
    },
  });

  /**
   * well-known folders in the model
   */
  #folders = <Folders>{
    anonymous: this.project.createDirectory('anonymous'),
    alias: this.project.createDirectory('aliases'),
    model: this.project.createDirectory('models'),
    enum: this.project.createDirectory('enums'),
    group: this.project.createDirectory('operations'),
    resource: this.project.createDirectory('resources'),
  }

  /** 
   * Linter instance for this API.
  */
  readonly linter = new Linter(this);

  readonly oaiExtensions = new ImportExtension(this);

  readonly #protocolExtensions = new Protocols(this);

  readonly messages = new ProcessingMessages(this);

  /**
   * persistable project data (this should end up in the adl.yaml file)
   */
  readonly projectData = new ProjectData();

  /**
   * references to the primitive types.
   */
  readonly primitives = Primitives;

  readonly KnownInterfaceTypes = <Dictionary<(declaration: InterfaceDeclaration) => boolean>>{
    model: isModelInterface,
    response: isResponseInterfaceType,
    result: isResultInterfaceType,
    operationgroup: isOperationGroupInterfaceType,
    resource: isResourceInterfaceType,
  };

  readonly KnownAliasTypes = <Dictionary<(declaration: TypeAliasDeclaration) => boolean>>{
    model: isModelTypeAlias,
    responseCollection: isResponseCollectionTypeAlias,
    response: isResponseTypeAlias,
    result: isResultTypeAlias,
    resource: isResourceTypeAlias,
  };

  get protocols() {
    return this.#protocols;
  }

  get files() {
    return this.project?.getSourceFiles() || [];
  }
  /**
   * gets access to privateData for a given node.
   *
   * @param path the navigable path to the node for which data is being stored.
   * @internal
   */
  getPrivateData(path: Path): Dictionary<any> {
    const p = path.join('/');
    let v = this.projectData.attic[p];
    if (v === undefined) {
      v = this.projectData.attic[p] = {};
    }
    return v;
  }

  document: Document.Parsed;
  extensionManager?: ExtensionManager;

  constructor(public readonly fileSystem: FileSystem = new UrlFileSystem(process.cwd())) {
    super();
    this.document = parseDocument(`# ADL Project file
name: UnnamedService

# information about this service
metadata:
  description: Description for this service.


# ADL Extension packages required for this service
use: 
- @azure-tools/adl.types.core  # ADL core types 
`, { keepCstNodes: true });
    (<any>this.project).api = this;
    this.protocols.http = new HttpProtocol(this);
  }

  /**
   * Access to the project's attic
   */
  get attic() {
    return this.projectData.attic.unprocessed;
  }

  async loadExtensions() {
    let use = this.document.get('use');
    switch (typeof use) {
      case 'string':
        use = [use];

      // eslint-disable-next-line no-fallthrough
      case 'object':
        if (use instanceof YAMLSeq) {
          use = use.items.map((i) => i.value);
        }
        if (!Array.isArray(use)) {
          throw new Error('Invalid plugin configuration ("use" is not an array of package references');
        }
        // load plugins now 
        this.extensionManager = this.extensionManager || await ExtensionManager.Create(this.fileSystem.extensionPath);

        for (const each of use) {
          try {
            // we need to see if this a local folder before trying to load the extension.
            const fullPath = this.fileSystem.resolve(each);

            const pkg = (fullPath.startsWith('file:/') && await exists(FileUriToPath(fullPath))) ? await this.extensionManager.findPackage('someExtension', fullPath) : await this.extensionManager.findPackage(each);
            let ext = await pkg.extension;
            if (!ext) {
              // it's not installed, 
              ext = await pkg.install();
            }
            const exports = ext.load();

            // iterate thru the default exports and bind the events to the respective emitters.
            for (const [key, xport] of items<string, EventListener, any>(exports.default)) {
              // the key is just a string 
              // the xport should have members that we 
              // use to bind to the events.
              if (typeof xport === 'object') {
                switch (xport.activation) {
                  case undefined:
                  case Activation.disabled:
                    continue;

                  case Activation.demand:
                  case Activation.edit:
                    this.linter.subscribe(xport);
                    continue;

                  case Activation.import:
                    this.oaiExtensions.subscribe(xport);
                    continue;
                }
              }
            }

          } catch (E) {
            this.messages.warning(`Unable to load extension ${each} -- ${E.message}`, undefined);
          }
        }
        break;

      default:
        throw new Error('Invalid plugin configuration');
    }
  }

  /** @internal */
  async initialize() {
    // loads any extensions in the project file 
    // and binds their events to the model.

    if (await this.fileSystem.isFile('api.yaml')) {
      const content = await this.fileSystem.readFile('api.yaml');
      this.document = parseDocument(content, { keepCstNodes: true });
      await this.loadExtensions();
    }

    for (const each of this.#protocolExtensions.intializeProtocol()) {
      this.api.protocols[each.protocolName] = each;
    }
  }

  async importModel(source: FileSystem, ...inputs: Array<string>) {
    return await new Visitor(this, source, 'unknown', ...inputs).process();
  }

  async load() {
    await this.initialize();
    await readFiles(this.fileSystem, '', this.project);
    return this;
  }

  async saveADL(cleanDirectory = true) {
    // save any open files to memory
    await this.project.save();

    // remove folder if required
    if (cleanDirectory) {
      await rmdir(FileUriToPath(this.fileSystem.cwd));
    }

    const format = {
      indentSize: 1,
    };

    // save the api.yaml file
    await this.fileSystem.writeFile('api.yaml', this.document.toString());

    // print each file and save it.
    return (await Promise.all(
      this.project.getSourceFiles().map(async (each) => {
        if (this.isFileAnonymous(each)) {
          return;
        }
        // disabled: format/organize imports
        // each.formatText(format);
        // each.organizeImports(format);

        await this.fileSystem.writeFile(each.getFilePath(), each.print().
          //replace(/\*\/\s*\/\*\*\s*/g, '').
          replace(/^(\s*\/\*)/g, '\n$1'));
      }))).length;
  }

  /** @internal */
  getFile(identity: Identity, type: keyof Folders): SourceFile {
    if (isAnonymous(identity)) {
      identity = identity.name;
      type = 'anonymous';
    }
    const filename = `${(<string>identity).replace(/[^\w]+/g, '_')}.ts`;
    return this.#folders[type].getSourceFile(filename) || this.#folders[type].createSourceFile(filename);
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

  isFileAnonymous(sourceFile: SourceFile): boolean {
    return this.#folders.anonymous.isAncestorOf(sourceFile);
  }

  getNameAndFile(identity: Identity, type: keyof Folders) {
    const name = isAnonymous(identity) ? `${type}_${this.#counter++}` : <string><any>valueOf(identity).replace(/[^\w]+/g, '_');
    const file = isAnonymous(identity) ? this.getFile(name, 'anonymous') : this.getFile(name, type);

    return { name, file };
  }

  createModelType(identity: Identity, initializer: any): any {
    // todo
  }

  createEnumType(name: string) {
    const file = this.project.createSourceFile(`${this.api.#folders.enum.getPath()}/${name}.ts`);
    // const e = file.addEnum(initializer);
    // there is already a function called create Enum
  }

  createTypeAlias(name: string) {
    // todo
  }


  identifyInterface(declaration: InterfaceDeclaration) {
    // returns a string that identifies that an interface is what it says it is.
    const tagType = [...getTags(declaration, ...keys(this.KnownInterfaceTypes))];
    switch (tagType.length) {
      case 1:
        // found a single
        return tagType[0].getTagName();
      case 0:
        // no tag types found
        // we're going to have to guess
        for (const [type, check] of items(this.KnownInterfaceTypes)) {
          if (check(declaration)) {
            return type;
          }
        }
    }
    // it has more than one. That's not ok.
    throw Error(`Inteface Decalaration has muliple type tags: ${declaration.getName()}: ${tagType.map(each => each.getTagName()).join(',')}`);
  }

  identifyTypeAlias(declaration: TypeAliasDeclaration) {
    const tagType = [...getTags(declaration, ...keys(this.KnownAliasTypes))];
    switch (tagType.length) {
      case 1:
        // found a single
        return tagType[0].getTagName();
      case 0:
        // no tag types found
        // we're going to have to guess
        for (const [type, check] of items(this.KnownAliasTypes)) {
          if (check(declaration)) {
            return type;
          }
        }
    }
    // it has more than one. That's not ok.
    throw Error(`Type Alias has muliple type tags: ${declaration.getName()}: ${tagType.map(each => each.getTagName()).join(',')}`);
  }

}
