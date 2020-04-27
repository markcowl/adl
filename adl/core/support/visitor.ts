/* eslint-disable @typescript-eslint/ban-types */
import { Tracker, Path, PathItem, anonymous, isAnonymous } from '@azure-tools/sourcemap';
import { values, items, Dictionary, keys } from '@azure-tools/linq';
import { OnAdd, setPath, Element } from '../model/element';
import { FileSystem } from './file-system';
import { parse } from 'yaml';
import { VersionInfo } from '../model/version-info';
import { Info, JsonReference } from '@azure-tools/openapi';
import { ApiModel } from '../model/api-model';
import { isObject } from 'util';

export interface OAIModel {
  info: Info;
}
export function is<T extends Object>(instance: any): instance is T {
  if (instance === undefined || instance === null || typeof instance !== 'object') {
    return false;
  }

  for (const each of values(instance)) {
    if (typeof each === 'object') {
      if (is(each)) {
        return true;
      }
      // the child is empty, so this doesn't make it real yet.
      continue;
    }

    if (each !== undefined && each !== null) {
      // it has a member that's not undefined or null
      // it's a viable object
      return true;
    }
  }
  // didn't have any members with data.
  return false;
}

export function isObjectClean(obj: any): boolean {
  if (obj && typeof obj === 'object') {

    for (const each of values(obj)) {
      if (each !== undefined && typeof each === 'object') {
        if (!isObjectClean(each)) {
          return false;
        }
        continue;
      }
      return false;
    }
  }
  return true;
}

export interface SourceFile<TSourceModel extends OAIModel> {
  sourceModel: TSourceModel;
  apiVersion: string;
  tracker: Tracker;
  sourceFile: string;
  visitor: Visitor<TSourceModel>;
}

export class Visitor<TSourceModel extends OAIModel> {
  key = '';
  sourceFiles = new Map<string, Promise<Context<TSourceModel, TSourceModel>>>();
  $refs = new Map<string, any>();

  error(text: string, sourceFile: string, path: Path) {
    console.error(text);
  }
  warn(text: string, sourceFile: string, path: Path) {
    console.error(text);
  }

  constructor(
    public api: ApiModel,
    public fileSystem: FileSystem,
    public inputType: 'oai3' | 'oai2',
    ...sourceFiles: Array<string>) {
    // the source files are going to be YAML/JSON files for this 
    // so we can speed up the process and grab them all and hold onto them
    for (const each of new Set(sourceFiles)) {
      this.sourceFiles.set(each, this.loadInput(this.fileSystem.resolve(each)));
    }
  }

  async loadInput(sourceFile: string, isSecondary = false): Promise<Context<TSourceModel, TSourceModel>> {
    const content = await this.fileSystem.readFile(sourceFile);
    const sourceModel = parse(content);
    const tracker = new Tracker();
    return new Context({
      sourceFile,
      apiVersion: sourceModel.info.version,
      sourceModel,
      tracker,
      visitor: this,
    }, sourceModel);
  }

  async process<TOutput>(action: (t: Context<TSourceModel, TSourceModel>) => Promise<TOutput>) {
    for (const { key, value } of items(this.sourceFiles)) {
      const ctx = await value;
      await action(ctx);
      if (!isObjectClean(ctx.sourceModel)) {
        this.api.addToAttic(key, ctx.sourceModel);
      }
    }
    return this.api;
  }

  findNode(path: Path, graph: any): any {
    const [member, ...rest] = path;
    if (member) {
      const node = graph[member.valueOf()];
      if (node) {
        return rest.length > 0 ? this.findNode(rest, node) : node;
      }
    }
    throw new Error(`unable to resolve $ref ${path}`);
  }

  async processRef<TInput, TOutput extends Element>(sourceFile: string, path: Path, action: (t: Context<TSourceModel, NonNullable<TInput>>) => Promise<TOutput | undefined>): Promise<TOutput | undefined> {
    let target = await this.sourceFiles.get(sourceFile);
    if (!target) {
      // the file we're looking for isn't there
      // let's add it to the list as a secondary file
      const t = this.loadInput(sourceFile, true);
      this.sourceFiles.set(sourceFile, t);
      target = await t;
    }
    const node = this.findNode(path, target.sourceModel);
    if (node) {
      const key = path.pop();
      if (key) {
        const parentKey = path.pop();
        const ctx = new Context(target.source, node, path, parentKey);
        return ctx.process(action, key);
      }
    }
    throw new Error(`Unable to process Ref ${sourceFile}#${path}`);
  }
}


export async function processRefTarget<Tin, Tout extends Element, TSourceModel extends OAIModel>(context: Context<TSourceModel, JsonReference<Tin>>, action: (c: Context<TSourceModel, Tin>) => Promise<Tout | undefined>) {
  const { visitor, value, normalizeReference } = context;

  // figure out if the target of the reference is already done
  const { $ref, file, path } = normalizeReference(value.$ref);

  return <Tout>visitor.$refs.get($ref) || <Tout>await visitor.processRef(file, path, action);
}

export class Context<TSourceModel extends OAIModel, TValue> {
  constructor(
    public source: SourceFile<TSourceModel>,
    public value: TValue,
    public path: Path = [],
    public key: PathItem = '') {
  }

  error(text: string, relativePath: Array<string> = []) {
    this.visitor.error(text, this.sourceFile, [...this.path, this.key, ...relativePath]);
  }

  warn(text: string, relativePath: Array<string> = []) {
    this.visitor.warn(text, this.sourceFile, [...this.path, this.key, ...relativePath]);
  }

  get visitor() {
    return this.source.visitor;
  }
  get tracker() {
    return this.source.tracker;
  }
  get api() {
    return this.visitor.api;
  }
  get sourceModel() {
    return this.source.sourceModel;
  }
  get sourceFile() {
    return this.source.sourceFile;
  }
  get inputType() {
    return this.visitor.inputType;
  }
  get isAnonymous() {
    return isAnonymous(this.key);
  }
  get refToHere() {
    return `${this.sourceFile}#${this.path.join('/')}`;
  }

  normalizeReference(ref: string) {
    const split = /(.*?)#(.*)/g.exec(ref);
    if (!split) {
      throw new Error(`$ref '${ref}' not legal`);
    }
    // eslint-disable-next-line prefer-const
    let [file, , path] = split;

    // is the file pointing to this file?
    if (file === '' || file === '.' || file === './') {
      file = this.sourceFile;
    } else {
      file = this.visitor.fileSystem.resolve(file);
    }
    return {
      file: file,
      path: path.split('/'),
      $ref: `${file}#${path}`,
    };
  }

  track<T extends OnAdd>(instance: T): T {
    // attach the $onAdd function.
    instance.$onAdd = (path: Path) => {
      // tell the tracker where we're going
      this.tracker.add(path, this.path);

      // for each property, call it's onAdd too.
      for (const { key, value } of items(<Dictionary<any>>instance)) {
        // call each $onAdd (recursively when they are objects)
        if (value === undefined) {
          delete (<any>instance)[key];
          continue;
        }
        setPath(value, [...path, key]);
        (<any>instance)[key] = value.valueOf();
      }
      delete instance.$onAdd;
    };
    return instance;
  }

  /** marks a property as used */
  mark<LN, K extends keyof TValue>(key: K) {
    const v = this.value[key];
    delete this.value[key];
    return v;
  }

  /** takes a value of a property and then removes the property */
  use<LN, K extends keyof TValue>(key: K, v?: LN, removeFromSource = true) {
    if (this.value[key] === undefined) {
      return undefined;
    }
    //
    if (v === undefined) {
      v = <any>this.value[key];
    }
    if (v !== undefined) {
      // wrap the value
      const result = <any>new Object(v);

      // attach the $tag function
      result.$onAdd = (targetPath: Path) => {
        this.tracker.add(targetPath, [...this.path, key]);
      };

      // remove the value from the source object.
      if (removeFromSource) {
        delete this.value[key];
      }
      return result;
    }
    return undefined;
  }

  get anyKeys() {
    return keys(this.value).any();
  }

  /** takes a value of a property but leaves the property in the parent */
  copy<LN, K extends keyof TValue>(key: K, v: LN) {
    return this.use(key, v, false);
  }

  /** manually set a specific value and provide the Path to the source location */
  set<T>(value: T, fullPath: Path) {
    const result = <any>new Object(value);

    // attach the $tag function
    result.$onAdd = (targetPath: Path) => {
      this.tracker.add(targetPath, fullPath);
    };

    return result;
  }

  async process<TInput, TOutput extends Element>(action: (t: Context<TSourceModel, NonNullable<TInput>>) => Promise<TOutput | undefined>, key: keyof TValue | anonymous, value?: TInput | NonNullable<TInput>): Promise<TOutput | undefined> {

    // check to see if there is a result for this node already done
    const result = this.visitor.$refs.get(`${this.sourceFile}#${[...this.path, key].join('/')}`);
    if (result) {
      return result;
    }

    // get the value (based on the index, or if it was explicity passed in.)
    const v = value || (!isAnonymous(key) && <NonNullable<TInput>><unknown>this.value[key]);

    if (v) {
      const context = new Context(this.source, <NonNullable<TInput>>v, [...this.path, key.valueOf()], key);

      const result = await action(context);
      if (!isAnonymous(key) && isObjectClean(v)) {
        delete (<any>this.value)[key.valueOf()];
      }

      if (result) {
        // really everything from 'process' should end up as an Element?
        // this is common to every element
        // - set the api version that it was added
        // - set the deprecated version if it's deprecated in this version.
        result.versionInfo.push(context.track<VersionInfo>({
          // deprecated isn't on everything, but this is safe when it's not there
          deprecated: context.use(<any>'deprecated', this.source.apiVersion),
          added: context.set(this.source.apiVersion, ['info', 'version']),
        }));
        result.addInternalData(this.visitor.inputType, { preferredFile: this.sourceFile });
      }
      return result;
    }
    return undefined;
  }
}