/* eslint-disable @typescript-eslint/ban-types */
import { Tracker, Path } from '@azure-tools/sourcemap';
import { values, items, Dictionary } from '@azure-tools/linq';
import { OnAdd, setPath } from '../model/element';
import { Property } from '../serialization/adl/api';


export function isObjectClean(obj: any): boolean {
  if (obj && typeof obj === 'object') {
    for (const each of values(obj)) {
      if (each && typeof each === 'object') {
        return false;
      }
    }
  }
  return true;
}

export type Unspecified = { $fake: true };
const unspecified: Unspecified = { $fake: true };
export type anonymous = { valueOf: () => string };
export const anonymous = <(s: string) => anonymous>Object;

export function isAnonymous(instance: any): instance is anonymous {
  return instance && typeof instance === 'object';
}

export class Visitor<TTargetModel, TSourceModel, TLeafNode = TSourceModel> {
  value: TLeafNode;
  get isAnonymous() {
    return isAnonymous(this.key);
  }

  constructor(public output: TTargetModel, public input: TSourceModel, public sourceFile: string, value?: TLeafNode, public tracker = new Tracker(), public path: Array<string | number | symbol> = [], public key: string | number | symbol | anonymous = '') {
    this.value = value || <TLeafNode><unknown>input;
  }

  track<T extends OnAdd>(instance: T): T {
    // attach the $onAdd function.
    instance.$onAdd = (path: Path) => {
      // tell the tracker where we're going
      this.tracker.add(path, this.path);

      // for each property, call it's onAdd too.
      for (const { key, value } of items(<Dictionary<any>>instance)) {
        // call each $onAdd (recursively when they are objects)
        setPath(value, [...path, key]);
      }
    };
    return instance;
  }

  /** creates an proxy object for the target node  */
  create<TClass extends new (...args: any) => any>(type: TClass, instance: Partial<InstanceType<TClass>>): InstanceType<TClass> {
    // ensure this is an instance of the class
    Object.setPrototypeOf(instance, (<any>type).prototype);
    const i = <InstanceType<TClass>>instance;

    // attach the $onAdd function.
    i.$onAdd = (path: Path) => {
      // tell the tracker where we're going
      this.tracker.add(path, this.path);

      // for each property, call it's onAdd too.
      for (const { key, value } of items(<Dictionary<any>>instance)) {
        // first, ensure the actual value is set
        (<any>instance)[key] = value.valueOf();

        // call each $onAdd function and remove it.
        setPath(value, [...path, key]);
      }
    };
    return i;
  }

  /** takes a value of a property and then removes the property */
  use<LN, K extends keyof TLeafNode>(key: K, v: LN | Unspecified = unspecified, removeFromSource = true) {
    //
    v === unspecified || this.value[key];
    if (v !== undefined && v !== unspecified) {
      // wrap the value
      const result = <any>new Object(v);

      // attach the $tag function
      result.$tag = (targetPath: Path) => {
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

  /** takes a value of a property but leaves the property in the parent */
  copy<LN, K extends keyof TLeafNode>(key: K, v: LN | Unspecified = unspecified) {
    return this.use(key, v, false);
  }

  /** manually set a specific value and provide the Path to the source location */
  set<T>(value: T, fullPath: Path) {
    const result = <any>new Object(value);

    // attach the $tag function
    result.$tag = (targetPath: Path) => {
      this.tracker.add(targetPath, fullPath);
    };

    return result;
  }

  async _process<LN, K extends keyof TLeafNode, TOutput>(key: K, action: (t: Visitor<TTargetModel, TSourceModel, NonNullable<LN>>) => Promise<TOutput>) {
    if (this.value[key] !== undefined) {
      const value = <NonNullable<LN>><unknown>this.value[key];

      const tracker = new Visitor(this.output, this.input, this.sourceFile, value, this.tracker, [...this.path, key], key);

      // if the visitor sucessfully resolved the node, remove it from the input. 
      const result = await action(tracker);

      if (isObjectClean(value)) {
        delete this.value[key];
      }

      // it's not resolved, leave it in and tell the parent
      return result;
    }
    // no value? 
    return undefined;
  }

  async process<T, TOutput>(action: (t: Visitor<TTargetModel, TSourceModel, NonNullable<T>>) => Promise<TOutput>, key: keyof TLeafNode | anonymous, value?: T | NonNullable<T>): Promise<TOutput | undefined> {
    const v = value || (!isAnonymous(key) && <NonNullable<T>><unknown>this.value[key]);

    if (v) {
      const tracker = new Visitor(this.output, this.input, this.sourceFile, <NonNullable<T>>v, this.tracker, [...this.path, key.valueOf()], key);
      const result = await action(tracker);
      if (isObjectClean(value)) {
        delete (<any>this.value)[key.valueOf()];
      }
      return result;
    }
    return undefined;
  }

}