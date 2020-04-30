import { Dictionary, items } from '@azure-tools/linq';
import { trackTarget } from '@azure-tools/sourcemap';
import { InternalData } from './internal-data';
import { VersionInfo } from './version-info';


export interface Attic extends Dictionary<any> {

}

function clean(this: any, key: string, value: any): any {
  return value === undefined || value === null ? value : value.valueOf();
}

export class ElementArray<T> extends Array<T> {
  #set = new Set<string>();
  private uniq(value: T) {
    const vv = JSON.stringify(value, clean, 2);
    if (this.#set.has(vv)) {
      return false;
    }
    this.#set.add(vv);
    return true;
  }
  push(...values: Array<T | undefined>) {
    for (const value of values) {
      if (value !== undefined) {
        // todo: fix temporary means to stop duplicates
        if ((<any>this.valueOf()).uniq(value)) {
          super.push(value);
        }
      }
    }
    return this.length;
  }
}

/** inheriting from Initializer adds an apply<T> method to the class, allowing you to accept an object initalizer, and applying it to the class in the constructor. */
export class Initializer {
  protected initialize<T>(initializer?: Partial<T>) {
    for (const { key, value } of items(initializer)) {
      // copy the true value of the items to the object
      // (use the proxy)
      const raw = (<any>trackTarget(this));
      const target = raw[key];


      if (value !== undefined) {
        const rawValue = (<any>value).valueOf();
        if (Array.isArray(target)) {
          if (rawValue[Symbol.iterator]) {
            // copy elements to target
            for (const each of rawValue) {
              raw[key].push(each);
            }
            continue;
          }
          throw new Error(`Initializer for object with array member '${key}', must be initialized with something that can be iterated.`);
        }
        // just copy the value across.
        raw[key] = rawValue;//.valueOf();
      }
    }
  }
}


/**  */
export class Element extends Initializer {
  internalData?: Dictionary<InternalData>;
  versionInfo = new ElementArray<VersionInfo>();
  attic?: Attic;

  constructor(initializer?: Partial<Element>) {
    super();
    this.initialize(initializer);
  }

  addToAttic(name: string, value: any) {
    if (value) {
      this.attic = this.attic || {};
      this.attic[name] = value.valueOf();
    }
    return this;
  }

  addInternalData(key: string, internalData: InternalData) {
    this.internalData = this.internalData || {};
    this.internalData[key] = internalData;
  }
}
