/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
import { items, keys, length, values } from '@azure-tools/linq';
import { common, Dictionary, Info, isReference } from '@azure-tools/openapi';
import { anonymous, getSourceFile, isAnonymous, isUsed, nameOf, Path, refTo, TrackedSource, TrackedTarget, Tracker, use, using, valueOf } from '@azure-tools/sourcemap';
import { fail } from 'assert';
import { parse } from 'yaml';
import { Alias } from '../model/alias';
import { ApiModel } from '../model/api-model';
import { Element, ElementArray } from '../model/element';
import { VersionInfo } from '../model/version-info';
import { Host } from './file-system';
import { Stopwatch } from './stopwatch';

export interface Options {
  isAnonymous?: boolean;
}

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
    for (const value of <any>source) {
      if (!isUsed(value)) {
        const raw = valueOf(value);

        if (typeof raw === 'object') {
          const v = Array.isArray(value) ? [] : {};

          addUnusedTo(v, value);
          if (length(v) !== 0) {
            target.push(v);
          }
        }
        else {
          target.push(valueOf(raw));
        }
      }
    }
    return;
  }

  for (const { key, value } of items(<any>source)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (!isUsed(value)) {
      const raw = valueOf(<any>value);
      if (typeof raw === 'object') {
        const v = Array.isArray(value) ? [] : {};

        addUnusedTo(v, value);
        if (length(v) !== 0) {
          target[key] = v;
        }
      }
      else {
        target[key] = raw;
      }
    }
  }
}

export class Visitor<TSourceModel extends OAIModel> {
  key = '';
  sourceFiles = new Map<string, Promise<Context<TSourceModel>>>();
  $refs = new Map<string, any>();


  api: ApiModel;
  tracker: Tracker;

  constructor(
    api: ApiModel,
    public host: Host,
    public inputType: 'oai3' | 'oai2',
    ...sourceFiles: Array<string>) {
    // the source location tracker
    this.tracker = new Tracker();

    // enable target tracking on the output modle
    this.api = TrackedTarget.track(api, [], this.tracker);

    // the source files are going to be YAML/JSON files for this 
    // so we can speed up the process and grab them all and hold onto them
    for (const each of new Set(sourceFiles)) {
      this.sourceFiles.set(this.host.fileSystem.resolve(each), this.loadInput(this.host.fileSystem.resolve(each)));
    }
  }

  async loadInput(sourceFile: string): Promise<Context<TSourceModel>> {

    const watch = new Stopwatch();
    const content = await this.host.fileSystem.readFile(sourceFile);
    this.host.loaded(sourceFile, watch.time);
    const model = parse(content);
    this.host.parsed(sourceFile, watch.time);

    const sourceModel = TrackedSource.track(<TSourceModel>model, model, { sourceFile: { filename: sourceFile }, path: [] });

    return new Context(sourceModel, sourceFile, this);
  }

  async process<TOutput>(action: fnAction<TSourceModel, TSourceModel, TOutput>) {

    for (const { value } of items(this.sourceFiles)) {
      const ctx = await value;
      const watch = new Stopwatch();

      await action(<NonNullable<TSourceModel>>ctx.sourceModel, ctx, false);
      this.host.processed(ctx.sourceFile, watch.time);

      this.api.attic = this.api.attic || {};
      // add unused parts of the source to the attic.
      addUnusedTo(this.api.attic, ctx.sourceModel);
      this.host.attic(ctx.sourceFile, watch.time);
    }
    return this.api;
  }

  findNode(path: Path, graph: any): any {
    const [member, ...rest] = path;
    if (member && !isAnonymous(member)) {
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

export type fnAction<TSourceModel extends OAIModel, TInput, TOutput, TOptions = {}> =
  (value: NonNullable<TInput>, context: Context<TSourceModel>, options?: TOptions) => Promise<TOutput | undefined>;

export class Context<TSourceModel extends OAIModel> {
  constructor(
    public sourceModel: TSourceModel,
    public sourceFile: string,
    public visitor: Visitor<TSourceModel>
  ) {

  }
  get host() {
    return this.visitor.host;
  }
  get apiVersion() {
    return valueOf(this.sourceModel.info.version);
  }
  error(text: string, offendingNode: any) {
    this.host.error(text, offendingNode);
    return undefined;
  }

  warn(text: string, offendingNode: any) {
    this.host.warning(text, offendingNode);
    return undefined;
  }

  forbiddenProperties<T extends Dictionary<any>>(instance: T, ...properties: Array<keyof T>) {
    let result = false;
    for (const each of keys(instance)) {
      if (properties.indexOf(each) > -1) {
        this.error(`may not contain property ${each}`, instance);
        result = true;
      }
    }
    return result;
  }

  get api() {
    return this.visitor.api;
  }

  async processArray<TInput, TOutput extends Element, TOptions = {}>(action: fnAction<TSourceModel, TInput, TOutput, TOptions>, value: Array<TInput> | undefined, output: ElementArray<TOutput>, options?: TOptions): Promise<ElementArray<TOutput> | undefined> {
    if (value) {
      for (const each of value) {
        output.push(await this.process(action, each));
      }
      use(value);
    }
    return TrackedTarget.track(output);
  }

  async process<TInput, TOutput extends Element, TOptions extends Options = {}>(action: fnAction<TSourceModel, TInput, TOutput, TOptions>, value: TInput | NonNullable<TInput>, options?: TOptions): Promise<TOutput | undefined> {

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
      file = this.visitor.host.fileSystem.resolve(file);
    }

    return {
      file: file,
      path: path.split('/'),
      $ref: `${file}#${path}`,
    };
  }

  async processInline<TIn, TOut extends Element, TOptions extends Options = {}>(action: fnAction<TSourceModel, TIn, TOut>, value: TIn | common.JsonReference<TIn> | undefined, options?: TOptions): Promise<TOut | Alias<TOut> | undefined>{
    if (value !== undefined) {
      if (isReference(value)) {
        const name = options?.isAnonymous ? anonymous(action.name) : nameOf(value);

        const { $ref, file, path } = this.normalizeReference(value.$ref);
        use(value.$ref);
        const target = 
          // already processed?
          <TOut>this.visitor.$refs.get($ref) || 
          
          // or processing it right now.
          <TOut>await this.visitor.processRef(file, path, action );

        // anonymous her 
        if (options?.isAnonymous) {
        // this is a direct link to the target 
        // so we return it as-is
          return target;
        }

        // this is a named reference to the target.
        // (ie, if a /component/* is a ref to another component, it gets a name)
        // we can produce an alias to that target
        return new Alias(action.name, name, target);
      }
      // if we came to processInline, then that means 
      // by defintion, we are processing an anonymous element.
      return await this.process(action, <TIn>value, { ...options, isAnonymous: true });
    }
    return undefined;
  }
}

