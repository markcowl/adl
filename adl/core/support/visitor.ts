/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
import { Tracker, Path, TrackedTarget, TrackedSource, getSourceFile, refTo, using, use, isUsed, valueOf } from '@azure-tools/sourcemap';
import { values, items, length } from '@azure-tools/linq';
import { Element, ElementArray } from '../model/element';
import { FileSystem } from './file-system';
import { parse } from 'yaml';
import { VersionInfo } from '../model/version-info';
import { Info, JsonReference, isReference } from '@azure-tools/openapi';
import { ApiModel } from '../model/api-model';
import { fail } from 'assert';

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
  tracker: Tracker;
  sourceFile: string;
  visitor: Visitor<TSourceModel>;
}

function addUnusedTo(target: any, source: any) {
  if (isUsed(source)) {
    return;
  }

  if (Array.isArray(source) && Array.isArray(target)) {
    for (const each of <any>source) {
      if (!isUsed(each)) {
        target.push(each.valueOf());
      }
    }
    return;
  }

  for (const { key, value } of items(<any>source)) {
    if (value === undefined || value === null) {
      continue;
    }
    if (!isUsed(value)) {
      if (typeof (<any>value).valueOf() === 'object') {
        target[key] = Array.isArray(value) ? [] : {};
        addUnusedTo(target[key], value);
        if (length(target[key]) === 0) {
          delete target[key];
        }
      }
      else {
        target[key] = (<any>value).valueOf();
      }
    }
  }
}

export class Visitor<TSourceModel extends OAIModel> {
  key = '';
  sourceFiles = new Map<string, Promise<Context<TSourceModel>>>();
  $refs = new Map<string, any>();

  error(text: string) {
    console.error(text);
  }
  warn(text: string) {
    console.error(text);
  }
  api: ApiModel;
  tracker: Tracker;

  constructor(
    api: ApiModel,
    public fileSystem: FileSystem,
    public inputType: 'oai3' | 'oai2',
    ...sourceFiles: Array<string>) {
    // the source location tracker
    this.tracker = new Tracker();

    // enable target tracking on the output modle
    this.api = TrackedTarget.track(api, [], this.tracker);

    // the source files are going to be YAML/JSON files for this 
    // so we can speed up the process and grab them all and hold onto them
    for (const each of new Set(sourceFiles)) {

      this.sourceFiles.set(this.fileSystem.resolve(each), this.loadInput(this.fileSystem.resolve(each)));
    }
  }

  async loadInput(sourceFile: string): Promise<Context<TSourceModel>> {
    const content = await this.fileSystem.readFile(sourceFile);
    const model = parse(content);
    const sourceModel = TrackedSource.track(<TSourceModel>model, model, { sourceFile: { filename: sourceFile }, path: [] });

    return new Context(sourceModel, this);
  }

  async process<TOutput>(action: fnAction<TSourceModel, TSourceModel, TOutput>) {
    for (const { value } of items(this.sourceFiles)) {
      const ctx = await value;
      await action(<NonNullable<TSourceModel>>ctx.sourceModel, ctx, false);

      this.api.attic = this.api.attic || {};
      // add unused parts of the source to the attic.
      addUnusedTo(this.api.attic, ctx.sourceModel);
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

  async processRef<TInput, TOutput extends Element, TOptions>(sourceFile: string, path: Path, action: fnAction<TSourceModel, TInput, TOutput, TOptions>): Promise<TOutput | undefined> {
    let targetContext = await this.sourceFiles.get(sourceFile);
    if (!targetContext) {
      // the file we're looking for isn't there
      // let's add it to the list as a secondary file
      const t = this.loadInput(sourceFile);
      this.sourceFiles.set(sourceFile, t);
      targetContext = await t;
    }
    const node = this.findNode(path, targetContext.sourceModel);
    if (node) {
      return await targetContext.process(action, node);
    }
    throw new Error(`Unable to process Ref ${sourceFile}#/${path}`);
  }
}

type fnAction<TSourceModel extends OAIModel, TInput, TOutput, TOptions = {}> =
  (value: NonNullable<TInput>, context: Context<TSourceModel>, options?: TOptions) => Promise<TOutput | undefined>;

export class Context<TSourceModel extends OAIModel> {
  constructor(
    public sourceModel: TSourceModel,
    public visitor: Visitor<TSourceModel>
  ) {

  }

  get apiVersion() {
    return valueOf(this.sourceModel.info.version);
  }
  error(text: string, offendingNode: any) {
    this.visitor.error(text);
  }

  warn(text: string, offendingNode: any) {
    this.visitor.warn(text);
  }

  get api() {
    return this.visitor.api;
  }

  async processArray<TInput, TOutput extends Element, TOptions = {}>(action: fnAction<TSourceModel, TInput, TOutput, TOptions>, value: Array<TInput> | undefined, output: ElementArray<TOutput>, options?: TOptions): Promise<ElementArray<TOutput> | undefined> {
    if (value) {
      for (const each of value) {
        await this.process(action, each);
      }
      use(value);
    }
    return TrackedTarget.track(output);
  }

  async process<TInput, TOutput extends Element, TOptions = {}>(action: fnAction<TSourceModel, TInput, TOutput, TOptions>, value: TInput | NonNullable<TInput>, options?: TOptions): Promise<TOutput | undefined> {

    if (value !== undefined && value !== null) {

      // see if we've processed this node before.
      const ref = refTo(value);
      let result = <TOutput | undefined>this.visitor.$refs.get(ref);
      if (result) {
        return result;
      }

      // ok, call the action
      result = await action(value!, this, options);

      // we're going to mark the original value as used
      // note: does not mark the children as used. 
      use(value);

      if (result !== undefined) {
        result = TrackedTarget.track(result);
        // we got back a value for that.

        // track it so we don't redo it if asked for it again later.
        this.visitor.$refs.set(ref, result);

        result.versionInfo.push(new VersionInfo({
          // deprecated isn't on everything, but this is safe when it's not there
          deprecated: using((<any>value).deprecated, this.apiVersion),
          added: this.apiVersion,
        }));
        result.addInternalData(this.visitor.inputType, { preferredFile: getSourceFile(value) });

        return result;
      }
    }
    return undefined;
  }

  normalizeReference(ref: string) {
    const split = /(.*?)#(.*)/g.exec(ref);
    if (!split) {
      throw new Error(`$ref '${ref}' not legal`);
    }
    // eslint-disable-next-line prefer-const
    let [, file, path] = split;
    if (path.startsWith('/')) {
      path = path.substr(1);
    }
    // is the file pointing to this file?
    if (file === '' || file === '.' || file === './') {
      file = getSourceFile(ref)?.filename || fail(`unable to get filename of $ref ${ref}`);
    } else {
      file = this.visitor.fileSystem.resolve(file);
    }

    return {
      file: file,
      path: path.split('/'),
      $ref: `${file}#${path}`,
    };
  }

  async processRefTarget<Tin, Tout extends Element>(ref: JsonReference<Tin>, action: fnAction<TSourceModel, Tin, Tout>): Promise<Tout> {
    const { $ref, file, path } = this.normalizeReference(ref.$ref);
    use(ref.$ref);
    return <Tout>this.visitor.$refs.get($ref) || <Tout>await this.visitor.processRef(file, path, action);
  }
  async processPossibleReference<TInput, TOutput extends Element>(
    refAction: fnAction<TSourceModel, JsonReference<TInput>, TOutput>,
    action: fnAction<TSourceModel, TInput, TOutput>,
    value?: TInput | JsonReference<TInput> | NonNullable<TInput>): Promise<TOutput | undefined> {

    // const v = value || (!isAnonymous(key) && <NonNullable<TInput>><unknown>this.value[key]);
    if (value !== undefined) {
      return (isReference(value) ?
        // they have used a $ref to a schema - resolve that.
        await this.process(refAction, value) :
        // an inlined schema --process that first
        await this.process(action, <TInput>value));
    }
    return undefined;

  }
}

