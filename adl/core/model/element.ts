import { Dictionary, items, keys } from '@azure-tools/linq';
import { Path, trackTarget } from '@azure-tools/sourcemap';
import { InternalData } from './internal-data';
import { VersionInfo } from './version-info';


export interface Attic extends Dictionary<any> {

}

export class ElementArray<T> extends Array<T> {
  __set = new Set<string>();
  push(...values: Array<T | undefined>) {
    for (const value of values) {
      if (value !== undefined) {
        super.push(value);
        //const vv = JSON.stringify((<any>value).valueOf());
        // todo: fix temporary means to stop duplicates
        //if (!this.__set.has(vv)) {
        //          this.__set.add(vv);
        //      }
      }
    }
    return this.length;
  }
}

/** inheriting from Initializer adds an apply<T> method to the class, allowing you to accept an object initalizer, and applying it to the class in the constructor. */
export class Initializer {
  protected initialize<T>(initializer?: Partial<T>) {
    for (const { key, value } of items(initializer)) {
      // copy the true value of the item.
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
  versionInfo = trackTarget(new ElementArray<VersionInfo>());
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
