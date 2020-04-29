/* eslint-disable @typescript-eslint/ban-types */
import { Path, Tracker } from './exports';
import { items } from '@azure-tools/linq';

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

interface Target {
  proxy: Object;
  tracker?: Tracker;
  pathInTarget: Path;
  origin?: Origin;
}

const sourceRegistry = new WeakMap<Object, Object>();
const targetRegistry = new WeakMap<Object, Target>();

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
  ActualValue = '##actualValue',  // another backdoor
  Tracker = '##Tracker', // instance of the tracker that this object is bound to.
  IsProxy = '##IsProxy' // lets us know if we're in a proxy
}

export function trackSource<T extends Object>(instance: T, origin: Origin): T {
  let result = sourceRegistry.get(instance);

  if (result === undefined) {
    result = new Proxy<T>(instance, {
      has: (actual: T, property: keyof T) => {
        return property === SpecialProperties.Origin || property in actual;
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
            return () => actual;
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
    });
    sourceRegistry.set(instance, result);
  }
  return <T>result;
}

function mkOnAdd<T>(proxy: T) {
  return (tracker: Tracker, pathInTarget: Path, prop: any) => {
    if (pathInTarget) {
      // we have to tell the tracker that we've now got a path
      (<any>proxy)[SpecialProperties.Destination] = pathInTarget;

      if (tracker) {
        (<any>proxy)[SpecialProperties.Tracker] = tracker;

        tracker.add(pathInTarget, (<any>proxy)[SpecialProperties.Origin].path);

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
              return (<Target>targetRegistry.get(instance)).origin;

            case SpecialProperties.valueOf:
              return () => actual;

            case SpecialProperties.ActualValue:
              return actual;

            case SpecialProperties.Tracker:
              return (<Target>targetRegistry.get(instance)).tracker;

            case SpecialProperties.Destination:
              return (<Target>targetRegistry.get(instance)).pathInTarget;
          }
          const value = actual[property];
          const { pathInTarget: path, tracker } = <Target>targetRegistry.get(instance);


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
              (<Target>targetRegistry.get(instance)).tracker = value;
              return true;

            case SpecialProperties.Destination:
              (<Target>targetRegistry.get(instance)).pathInTarget = value;
              return true;

            case SpecialProperties.Origin:
              if (!value.sourceFile || !value.path) {
                throw new Error('origin not of type Origin');
              }

              (<Target>targetRegistry.get(instance)).origin = value;
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
          target[property] = value.valueOf();

          // get the tracker
          // const i = (<Target>targetRegistry.get(instance));
          const { pathInTarget: path, tracker } = (<Target>targetRegistry.get(instance));
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
            const origin = <Origin>value['##Origin'];
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