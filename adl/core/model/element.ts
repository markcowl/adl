import { Dictionary, items } from '@azure-tools/linq';
import { TrackedTarget, use } from '@azure-tools/sourcemap';
import { Node } from 'ts-morph';
import { project } from '../support/typescript';
import { InternalData } from './internal-data';
import { VersionInfo } from './version-info';


export interface Attic extends Dictionary<any> {

}

function clean(this: any, key: string, value: any): any {
  return value === undefined || value === null ? value : value.valueOf();
}

/** inheriting from Initializer adds an apply<T> method to the class, allowing you to accept an object initalizer, and applying it to the class in the constructor. */
export class Initializer {
  initialize<T>(initializer?: Partial<T>) {
    for (const [key, value] of items(initializer)) {
      // copy the true value of the items to the object
      // (use the proxy)
      const proxy = (<any>TrackedTarget.track(this));
      const targetProperty = proxy[key];

      if (value !== undefined) {
        const rawValue = (<any>value).valueOf();
        if (Array.isArray(targetProperty)) {
          if (rawValue[Symbol.iterator]) {
            // copy elements to target
            for (const each of rawValue) {
              proxy[key].push(each);
            }
            continue;
          }
          throw new Error(`Initializer for object with array member '${key}', must be initialized with something that can be iterated.`);
        }
        // just copy the value across.
        proxy[key] = (<any>value);
      }
    }
    return this;
  }
}


/** 
 * Base type for all objects in the model 
 */
export class Element extends Initializer {
  node!: Node;

  internalData?: Dictionary<InternalData>;
  versionInfo = new Array<VersionInfo>();
  attic?: Attic;

  constructor(initializer?: Partial<Element>) {
    super();
    this.initialize(initializer);
  }

  addToAttic(name: string, value: any) {
    use(value, true);
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

  /**
   * targetMap is a function that gives back a dictionary of members to Path (how to find the member in the ts project)
   * @param childMap a childmap that should be copied on top of any defintions that this class has
   * 
   * @notes - every child class of this class should override {@link targetMap}
   */
  get targetMap(): Dictionary<any> {
    return {
    };
  }

  /**
   * 
   * @param sourceMap 
   */
  track(sourceMap: Dictionary<any>) {
    project(this.node).track(this.targetMap, sourceMap);
    return this;
  }
}
