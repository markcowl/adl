/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
import { Path, Tracker } from './exports';
import { items, values } from '@azure-tools/linq';


/* eslint-disable */
if (!Array.prototype.hasOwnProperty('last')) {
  Object.defineProperty(Array.prototype, 'last', {
    get() {
      return this[this.length - 1];
    }
  });
}
export interface SourceFile {
  filename: string;
}

export interface Origin {
  sourceFile: SourceFile;
  path: Path;
}

export function typeOf(obj: any) {
  if (obj === null) {
    return 'null';
  }

  const t = typeof (obj);
  if (t === 'object') {
    if (Array.isArray(obj)) {
      return 'array';
    }
    if (obj instanceof Set) {
      return 'set';
    }
    if (obj instanceof Map) {
      return 'map';
    }
    if (obj instanceof Date) {
      return 'date';
    }
    if (obj instanceof RegExp) {
      return 'regexp';
    }
  }
  return t;
}

interface TrackedTarget {
  proxy: Object;
  tracker?: Tracker;
  pathInTarget: Path;
  origin?: Origin;
}

interface TrackedSource {
  proxy: Object;
  isUsed?: boolean;
}

const sourceRegistry = new WeakMap<Object, TrackedSource>();
const targetRegistry = new WeakMap<Object, TrackedTarget>();

export class NullValue {
  valueOf() {
    return null;
  }
}

enum SpecialProperties {
  Origin = '##Origin', // the source path from whence the object came.
  Destination = '##Destination', // the target path to a trackedTarget object
  OnAdd = '$onAdd', // a hidden function that can bind an object to the parent.
  valueOf = 'valueOf', // a backdoor to get the actual un-proxied value. 
  toString = 'toString', // ensure that toString works on proxy'd primitives 
  ActualValue = '##actualValue',  // another backdoor
  Tracker = '##Tracker', // instance of the tracker that this object is bound to.
  IsProxy = '##IsProxy', // lets us know if we're in a proxy
  IsUsed = '##IsUsed', // tags the property as 'used'
  RefToHere = '##RefToHere', // gets the JSON Reference to the tracked source
}

/** marks a member in a tracked source model as 'used' */
export function use<T>(value: T): T {
  switch (typeOf(value)) {
    case 'undefined':
    case 'null':
    case 'function':
    case 'string':
    case 'boolean':
    case 'number':
      return value;
  }
  // just checking to see if it has the IsUsed will set it to IsUsed.
  if (SpecialProperties.IsUsed in value) {
    return value;
  }

  return value;
}

export function unusedMembers<T>(value: T) {
  if (value === undefined || value === null) {
    return false;
  }

  return values(<any>value).any((each: any) => each[SpecialProperties.IsUsed] === false);
}

export function getSourceFile(value: any): SourceFile | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  return value[SpecialProperties.Origin]?.sourceFile;
}

export function nameOf(value: any) {
  if (value === undefined || value === null) {
    return undefined;
  }
  return value[SpecialProperties.Origin]?.path.last;
}

export function refTo(value: any): string {
  if (value === undefined || value === null) {
    return '';
  }
  return value[SpecialProperties.RefToHere];
}

/** tags the the actual target value as being from the sourceValue */
export function using<T>(sourceValue: any, actualTargetValue: T): T | undefined {
  if (actualTargetValue === undefined || actualTargetValue === null) {
    return undefined;
  }
  if (sourceValue === undefined || sourceValue === null) {
    return undefined;
  }

  use(sourceValue);

  const o = sourceValue[SpecialProperties.Origin];
  if (o) {
    return <T>trackSource(typeof actualTargetValue === 'object' ? actualTargetValue : new Object(actualTargetValue), o);
  }
  // todo: sourceValue wasn't a tracked value? is this an error? 
  return actualTargetValue;
}

export function trackSource<T extends Object>(instance: T, origin: Origin): T {
  let result = sourceRegistry.get(instance);

  if (result === undefined) {
    result = {
      proxy: new Proxy<T>(instance, {
        has: (actual: T, property: keyof T) => {
          switch (property) {
            case SpecialProperties.Origin:
              return true;

            // checking for IsUsed marks this property as 'used'
            case SpecialProperties.IsUsed:
              sourceRegistry.get(instance)!.isUsed = true;
              return true;
          }
          return property in actual;
        },

        apply: function (actual, thisArg, argumentsList) {
          return actual.valueOf();
        },

        get: (actual: T, property: keyof T, proxy: T) => {
          switch (property) {
            case SpecialProperties.Origin:
              return origin;
            case SpecialProperties.IsProxy:
              return true;
            case SpecialProperties.ActualValue:
              return actual;
            case SpecialProperties.valueOf:
              return () => actual.valueOf();
            case SpecialProperties.toString:
              return () => actual.toString();
            case SpecialProperties.RefToHere:
              return `${origin.sourceFile.filename}#/${origin.path.join('/')}`;
            case SpecialProperties.IsUsed:
              return sourceRegistry.get(instance)!.isUsed === true;
          }
          const value = actual[property];
          const location = [...origin.path, property];

          switch (typeOf(value)) {
            case 'undefined':
              return value;

            case 'function':
              return (<any>value).bind(proxy);

            case 'null':
              return value;

            case 'string':
            case 'boolean':
            case 'number':
              return trackSource(new Object(value), { ...origin, path: location });

            case 'set':
            case 'map':
              throw new Error('Unsupported type in source tracker.');

            case 'array':
              return trackSource(value, { ...origin, path: location });
            case 'object':
              return trackSource(value, { ...origin, path: location });
          }
        }
      })
    };
    sourceRegistry.set(instance, result);
  }
  return <T>result.proxy;
}

function mkOnAdd<T>(proxy: T) {
  return (tracker: Tracker, pathInTarget: Path, prop: any) => {
    if (pathInTarget) {
      // we have to tell the tracker that we've now got a path
      (<any>proxy)[SpecialProperties.Destination] = pathInTarget;

      if (tracker) {
        (<any>proxy)[SpecialProperties.Tracker] = tracker;

        const o = (<any>proxy)[SpecialProperties.Origin];
        if (o?.path) {
          tracker.add(pathInTarget, o);
        }



        for (const { key, value } of items(<any>prop)) {
          const raw = (<any>value);

          if (raw !== undefined && raw !== null) {
            if (raw !== raw.valueOf()) {
              // re-add the member so that it recognizes that it's in a tracked object now.
              prop[key] = raw.valueOf();
            } else {
              if (raw.$onAdd) {
                raw.$onAdd(tracker, [...pathInTarget, key], value);
              }
              if (raw[SpecialProperties.Origin]) {
                tracker.add([...pathInTarget, key], raw[SpecialProperties.Origin]);
              }
            }
          }
        }
      }
    }
  };
}

export function trackTarget<T extends Object>(instance: T, pathInTarget?: Path, tracker?: Tracker): T {
  let result = targetRegistry.get(instance);

  if (result === undefined) {

    result = {
      pathInTarget: pathInTarget || [],
      tracker,
      proxy: new Proxy(instance, {
        has: (target: T, property: keyof T) => {
          switch (property) {
            case SpecialProperties.OnAdd:
            case SpecialProperties.Origin:
            case SpecialProperties.valueOf:
            case SpecialProperties.ActualValue:
            case SpecialProperties.Tracker:
            case SpecialProperties.Destination:
              return true;
          }

          return property in target;
        },

        get: (actual: T, property: keyof T, proxy: T) => {
          switch (property) {

            case SpecialProperties.IsProxy:
              return true;

            case SpecialProperties.OnAdd:
              return mkOnAdd(proxy);

            case SpecialProperties.Origin:
              return targetRegistry.get(instance)!.origin;

            case SpecialProperties.valueOf:
              return () => actual.valueOf();

            case SpecialProperties.toString:
              return () => actual.toString();

            case SpecialProperties.ActualValue:
              return actual;

            case SpecialProperties.Tracker:
              return targetRegistry.get(instance)!.tracker;

            case SpecialProperties.Destination:
              return targetRegistry.get(instance)!.pathInTarget;
          }
          const value = actual[property];

          if (typeof value === 'object' && (<any>value)[SpecialProperties.IsProxy] === true && Object.getOwnPropertyDescriptor(instance, property)) {
            (<any>targetRegistry.get(instance)!.proxy)[property] = value;
          }
          const { pathInTarget: path, tracker } = <TrackedTarget>targetRegistry.get(instance);


          const location = [...path, property];

          switch (typeOf(value)) {
            case 'function':
              return (<any>value).bind(proxy);

            case 'object':
            case 'array':
              return trackTarget(value, location, tracker);
          }

          return value;
        },
        set(target: T, property: keyof T, value: any) {

          switch (property) {
            case SpecialProperties.Tracker:
              targetRegistry.get(instance)!.tracker = value;
              return true;

            case SpecialProperties.Destination:
              targetRegistry.get(instance)!.pathInTarget = value;
              return true;

            case SpecialProperties.Origin:
              if (!value.sourceFile || !value.path) {
                throw new Error('origin not of type Origin');
              }

              targetRegistry.get(instance)!.origin = value;
              return true;
          }

          // if it's null or undefined, set it 
          if (value === undefined || value === null) {
            target[property] = value;
            return true;
          }
          // if this isn't a proxied object, and there is one in the registry 
          // for this, let's assume the user passed that in instead.
          if (undefined === value[SpecialProperties.IsProxy]) {
            value = targetRegistry.get(value)?.proxy || value;
          }

          //value = tVal;
          // set the actual value to the actual target value
          try {
            target[property] = value.valueOf();
          } catch (E) {
            // todo: ? 
          }
          // get the tracker
          // const i = (<Target>targetRegistry.get(instance));
          const { pathInTarget: path, tracker } = targetRegistry.get(instance)!;
          // const path = i.pathInTarget;
          //const tracker = i.tracker;

          // we can only track a position if a registered tracker is available.
          if (tracker) {

            // if the value has an onAdd function
            // we can have that add itself (and any possible children)
            if (typeof value === 'object') {
              if (SpecialProperties.OnAdd in value) {
                value.$onAdd(tracker, [...path, property], value);
              }
            }

            // and/or

            // does the value know it's origin?
            const origin = <Origin>value[SpecialProperties.Origin];
            if (origin) {
              // if we have the origin of the value
              // we can tell the tracker to track this
              tracker.add([...path, property], origin.path);
            }
          }
          return true;
        }
      })
    };
    targetRegistry.set(instance, result);
  }

  return <T>result.proxy;
}