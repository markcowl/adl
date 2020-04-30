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
  if (obj === undefined) {
    return 'undefined';
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
  parent?: TrackedSource;
  trackedChildren?: Object;
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
  IsSourceProxy = '##IsSourceProxy', // lets us know if we're in a proxy
  IsTargetProxy = '##IsTargetProxy', // lets us know if we're in a proxy
  IsUsed = '##IsUsed', // tags the property as 'used'
  RefToHere = '##RefToHere', // gets the JSON Reference to the tracked source
}

/** marks a member in a tracked source model as 'used' */
export function use<T>(value: T): T {
  if (value === undefined || value === null) {
    return value;
  }

  switch (typeof value) {
    case 'undefined':
    case 'function':
      return value;
  }

  if ((<any>value)[SpecialProperties.IsSourceProxy]) {
    (<any>value)[SpecialProperties.IsUsed] = true;
  }

  return value;
}

export function unusedMembers<T>(value: T) {
  if (value === undefined || value === null) {
    return false;
  }

  return values(<any>value).any((each: any) => each[SpecialProperties.IsUsed] === false);
}

export function isSourceProxy<T>(value: T) {
  if (value === undefined || value === null || typeof value !== 'object') {
    return false;
  }
  return (<any>value)[SpecialProperties.IsSourceProxy] === true;
}

export function isTargetProxy<T>(value: T) {
  if (value === undefined || value === null || typeof value !== 'object') {
    return false;
  }
  return (<any>value)[SpecialProperties.IsTargetProxy] === true;
}

export function isUsed<T>(value: T): value is NonNullable<T> {
  // only proxies have isUsed info
  // (so, null/undefined/bool/string/number are 'used' )
  if (typeof value !== 'object' || !isSourceProxy(value)) {
    return true;
  }
  // ask the proxy if the isUsed is set.
  return (<any>value)[SpecialProperties.IsUsed] === true;
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

function getProxy(instance: any) {
  if (instance === undefined || instance === null || isSourceProxy(instance) || isTargetProxy(instance) || typeof instance !== 'object') {
    return instance;
  }
  return sourceRegistry.get(instance) || targetRegistry.get(instance) || instance;
}

export function trackSource<T extends Object>(instance: T, origin: Origin, parent?: TrackedSource): T {
  if (isSourceProxy(instance)) {
    return instance;
  }
  if (isTargetProxy(instance)) {
    debugger;
  }
  let result = sourceRegistry.get(instance);

  if (result === undefined) {
    result = {
      parent,
      proxy: new Proxy<T>(instance, {
        has: (actual: T, property: keyof T) => {
          switch (property) {
            case SpecialProperties.Origin:
              return true;

            // checking for IsUsed marks this property as 'used'
            case SpecialProperties.IsUsed:
              return true;
          }
          return property in actual;
        },

        set: (target: T, property: keyof T, value: any) => {
          switch (property) {
            case SpecialProperties.IsUsed:
              // setting the IsUsed value always assumes you're setting IsUsed = true.
              // we don't allow you to unset the isUsed flag.

              const trackedSource = sourceRegistry.get(instance)!;

              // don't recheck if we're already used.
              if (trackedSource.isUsed) {
                return true;
              }

              // if the actual value isn't an object then we can just set the isUsed flag.
              if (typeof target.valueOf() !== 'object') {
                trackedSource.isUsed = true;
              } else {
                // if we have children, the final state of isUsed is dependent on all them being used.
                // this check only happens if we set an object to used and 
                trackedSource.isUsed = values(<any>trackedSource.proxy).all(each => (<any>each)[SpecialProperties.IsUsed]);
              }

              // if the parent has been marked as used (ie, 'false')
              // then tell the parent to finally check if all it's children are used up.
              if (trackedSource.parent && trackedSource.parent.isUsed === false) {
                (<any>trackedSource.parent.proxy)[SpecialProperties.IsUsed] = true;
              }
              return true;
          }
          target[property] = value;
          return true;
        },

        apply: function (actual, thisArg, argumentsList) {
          return actual.valueOf();
        },

        get: (actual: T, property: keyof T, proxy: T) => {
          switch (property) {
            case SpecialProperties.Origin:
              return origin;
            case SpecialProperties.IsSourceProxy:
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
              switch (property) {
                case 'indexOf':
                  return (<any>value).bind(actual);
              }
              return (<any>value).bind(proxy);

            case 'null':
              return value;

            case 'string':
            case 'boolean':
            case 'number':
              // track the child in the tracked children
              // so that the object is consistent
              const trackedSource = sourceRegistry.get(instance)!;
              const tc = <any>(trackedSource.trackedChildren = trackedSource.trackedChildren || {});
              if (!(property in tc)) {
                tc[property] = trackSource(new Object(value), { ...origin, path: location }, trackedSource);
              }
              return tc[property];

            case 'set':
            case 'map':
              throw new Error('Unsupported type in source tracker.');

            case 'array':
              return trackSource(value, { ...origin, path: location }, sourceRegistry.get(instance));
            case 'object':
              return trackSource(value, { ...origin, path: location }, sourceRegistry.get(instance));
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
          if (key === 'name') {
            debugger;
          }
          const raw = getProxy(value);

          if (raw !== undefined && raw !== null) {
            use(raw);
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
  if (isSourceProxy(instance)) {
    debugger;
  }
  if (isTargetProxy(instance)) {
    return instance;
  }

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

            case SpecialProperties.IsTargetProxy:
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

            case SpecialProperties.IsUsed:
              debugger;
              return undefined;
          }
          const value = actual[property];

          if (typeof value === 'object' && (<any>value)[SpecialProperties.IsTargetProxy] === true && Object.getOwnPropertyDescriptor(instance, property)) {
            (<any>targetRegistry.get(instance)!.proxy)[property] = value;
          }
          const { pathInTarget: path, tracker } = <TrackedTarget>targetRegistry.get(instance);


          const location = [...path, property];

          switch (typeof value) {
            case 'function':
              return (<any>value).bind(proxy);

            case 'object':
              if (isSourceProxy(value) || isTargetProxy(value)) {
                return value;
              }
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

            case SpecialProperties.IsUsed:
              debugger;
              return false;
          }

          // if it's null or undefined, set it 
          if (value === undefined || value === null) {
            target[property] = value;
            return true;
          }
          // if this isn't a proxied object, and there is one in the registry 
          // for this, let's assume the user passed that in instead.
          if (undefined === value[SpecialProperties.IsTargetProxy]) {
            value = targetRegistry.get(value)?.proxy || value;
          }

          //value = tVal;
          // set the actual value to the actual target value
          try {
            if (isSourceProxy(value)) {
              use(value);
            }
            use(value);
            target[property] = value.valueOf();
          } catch (E) {
            // todo: ? 
            // properties that are read-only will throw at the moment. 
            // Need to figure out how to detect that before calling set.
          }

          // get the tracker
          const { pathInTarget: path, tracker } = targetRegistry.get(instance)!;

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
              tracker.add([...path, property], origin);
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