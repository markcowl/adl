// Imported source for this from https://github.com/aleclarson/ee-ts

import { Dictionary, linq } from '@azure-tools/linq';
import { EventListener, ListenerMetaData } from '../eventing/event-listener';
import { Activation } from './activation';

/* Original License Text

MIT License

Copyright (c) 2018-present Alec Larson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* eslint-disable no-constant-condition */
/* eslint-disable no-dupe-class-members */
// Human-readable generic types
type Id<T> = T

// Extract the argument/return types of a function
type In<T> = T extends (...args: infer U) => any ? U : []
type Out<T> = T extends (...args: Array<any>) => infer U ? U : never

// Extract keys whose values match a condition
type Filter<T, Cond, U extends keyof T = keyof T> = {
  [K in U]: T[K] extends Cond ? K : never
}[U]

// Extract an array type of valid event keys
export type EventKey<T> = Filter<T, (...args: Array<any>) => any> & string

// Extract the argument/return types of a valid event
export type EventIn<T, K extends EventKey<T>> = Id<In<T[K]>>
export type EventOut<T, K extends EventKey<T>> = Id<Out<T[K]> | void>

/** An object that needs to be manually disposed of */
export interface Disposable {
  dispose(): void;
}

/** Extract the listener type for a specific event */
export type Listener<T = any, K extends EventKey<T> = EventKey<T>> = Id<
  (...args: EventIn<T, K>) => EventOut<T, K>
>

/** An object of event keys and listener values */
export type ListenerMap<T = any> = Partial<
  { [K in EventKey<T>]: Listener<T, K> }
>

export const $listeners = Symbol('EventEmitter.listeners');
export const $addListener = Symbol('EventEmitter.addListener');

/** Statically typed event emitter */
export class EventEmitter<T> {
  [$listeners]: { [K in EventKey<T>]?: IListenerList<T, K> }

  constructor() {
    this[$listeners] = {};
  }

  /** Unique symbol for accessing the internal listener cache */
  static readonly ev = $listeners

  /** Count the number of listeners for an event */
  static count<T>(ee: EventEmitter<T>, key: EventKey<T>): number {
    let count = 0;
    const list = ee[$listeners][key];
    if (list) {
      let cb = list.first;
      while (++count) {
        if (cb.next) {
          cb = cb.next;
        } else break;
      }
    }
    return count;
  }

  /** Check if an event has listeners */
  static has<T>(ee: EventEmitter<T>, key: '*' | EventKey<T>): boolean {
    if (key == '*') {
      for (key in ee[$listeners]) return true;
      return false;
    }
    return ee[$listeners][key] !== undefined;
  }

  /** Get an array of event keys that have listeners */
  static keys<T>(ee: EventEmitter<T>): Array<EventKey<T>> {
    return <any>Object.keys(ee[$listeners]);
  }

  /** Call the given listener when no other listeners exist */
  static unhandle<T, K extends EventKey<T>>(
    ee: EventEmitter<T>,
    key: K,
    impl: Listener<T, K>,
    disposables?: Array<Disposable>
  ): typeof impl {
    const listener: Listener<T, K> = (...args) => {
      if (!ee[$listeners][key]!.first.next) return impl(...args);
    };
    return ee.on(key, listener, disposables);
  }

  subscribe(listener: EventListener) {
    if (listener.activation !== undefined && listener.activation !== Activation.disabled) {
      for (const [name, fn] of linq.items(<Dictionary<any>><unknown>listener).where(([name, fn]) => name.length > 2 && name.startsWith('on'))) {
        if(typeof fn === 'function') {
          fn.meta = listener.meta;
          this.on(<any>name.substr(2),fn);
        }
      }
    }
  }

  /** Add a recurring listener */
  on<K extends EventKey<T>>(
    key: K,
    fn: Listener<T, K>,
    disposables?: Array<Disposable>
  ): typeof fn

  /** Add many recurring listeners */
  on(map: ListenerMap<T>, disposables?: Array<Disposable>): this

  /** Implementation */
  on(
    arg: EventKey<T> | ListenerMap<T>,
    fn?: Listener<T> | Array<Disposable>,
    disposables?: Array<Disposable>
  ): this | Listener<T> {
    if (typeof fn == 'function') {
      return this[$addListener](arg, fn, disposables);
    }
    return this[$addListener](arg, undefined, fn);
  }

  /** Add a one-time listener */
  one<K extends EventKey<T>>(key: K, fn: Listener<T, K>): typeof fn

  /** Add many one-time listeners */
  one(map: ListenerMap<T>): this

  /** Implementation */
  one(
    arg: EventKey<T> | ListenerMap<T>,
    fn?: Listener<T> | Array<Disposable>,
    disposables?: Array<Disposable>
  ): this | Listener<T> {
    if (typeof fn == 'function') {
      return this[$addListener](arg, fn, disposables, true);
    }
    return this[$addListener](arg, undefined, fn, true);
  }

  /** Remove one or all listeners of an event */
  off<K extends EventKey<T>>(key: K, fn?: Listener<T, K>): this

  /** Remove all listeners from all events */
  off(key: '*'): this

  /** Implementation */
  off(arg: '*' | EventKey<T>, fn?: Listener<T>): this {
    if (arg == '*') {
      const cache = this[$listeners];
      this[$listeners] = {};
      if (this._onEventUnhandled) {
        for (const key in cache) {
          this._onEventUnhandled(key);
        }
      }
      return this;
    }
    if (typeof fn == 'function') {
      const list = this[$listeners][arg]!;
      if (!list || unlink(list, l => l.fn == fn)) {
        return this;
      }
    }
    delete this[$listeners][arg];
    if (this._onEventUnhandled) {
      this._onEventUnhandled(<string>arg);
    }
    return this;
  }

  /** Call the listeners of an event */
  iterEmit<K extends EventKey<T>>(key: K, ...args: EventIn<T, K>): Iterable< { meta:  ListenerMetaData; result: NonNullable<Id<Out<T[K]>>> }>

  /** Implementation */
  *iterEmit<K extends EventKey<T>>(key: K, ...args: EventIn<T, K>): Iterable<any> {
    const gen = this.listeners(key);
    while (true) {
      const { value: listener, done } = gen.next();
      if (done) {
        return;
      } else {
        const generated = listener(...args);
        if (generated !== undefined) {
          yield {
            meta: listener.meta,
            result:  generated,
          };
        }
      }
    }
  }

  /** Call the listeners of an event */
  emit<K extends EventKey<T>>(key: K, ...args: EventIn<T, K>): EventOut<T, K>

  /** Implementation */
  emit<K extends EventKey<T>>(key: K, ...args: EventIn<T, K>): any {
    let result;
    const gen = this.listeners(key);
    while (true) {
      const { value: listener, done } = gen.next();
      if (done) {
        return result;
      } else {
        const generated = listener(...args);
        if (generated !== undefined) {
          result = generated;
        }
      }
    }
  }

  /** Iterate over the listeners of an event */
  *listeners<K extends EventKey<T>>(key: K): IterableIterator<Listener<T, K>> {
    const list = this[$listeners][key];
    if (!list) return;

    let prev = null;
    let curr = list.first;
    while (true) {
      yield curr.fn;

      // One-time listener
      if (curr.once) {
        // Splice it.
        if (prev) {
          prev.next = curr.next;
        }
        // Shift it.
        else if (curr.next) {
          list.first = curr = curr.next;
          continue;
        }
        // Delete it.
        else {
          delete this[$listeners][key];
          if (this._onEventUnhandled) {
            this._onEventUnhandled(<string>key);
          }
          return;
        }
      }
      // Recurring listener
      else {
        prev = curr;
      }

      // Continue to the next listener.
      if (curr.next) {
        curr = curr.next;
        continue;
      }

      // Update the last listener.
      list.last = curr;

      // All done.
      return;
    }
  }

  /** Called when an event goes from 0 -> 1 listeners */
  protected _onEventHandled?(key: string): void

  /** Called when an event goes from 1 -> 0 listeners */
  protected _onEventUnhandled?(key: string): void

  /** Implementation of the `on` and `one` methods */
  protected [$addListener](
    arg: EventKey<T> | ListenerMap<T>,
    fn?: Listener<T>,
    disposables?: Array<Disposable>,
    once = false
  ): this | Listener<T> {
    if (typeof arg == 'object') {
      let key: EventKey<T>;
      for (key in arg) {
        if (typeof arg[key] == 'function') {
          const fn = <Listener < T >>arg[key] ;
          const list = addListener(this[$listeners], <EventKey<T>>key, {
            fn,
            once,
            next: null,
          });
          if (disposables) {
            disposables.push({
              dispose: () => this.off(key, fn),
            });
          }
          if (fn == list.first.fn && this._onEventHandled) {
            this._onEventHandled(key);
          }
        }
      }
      return this;
    }
    if (typeof fn == 'function') {
      const key = arg;
      const list = addListener(this[$listeners], key, {
        fn,
        once,
        next: null,
      });
      if (disposables) {
        disposables.push({
          dispose: () => this.off(key, fn),
        });
      }
      if (fn == list.first.fn && this._onEventHandled) {
        this._onEventHandled(<string>arg);
      }
    }
    return fn!;
  }
}

// Internal listener entry
interface IListener<T, K extends EventKey<T> = EventKey<T>> {
  fn: Listener<T, K>;
  once: boolean;
  next: IListener<T, K> | null;
}

// Linked list of listener entries
interface IListenerList<T, K extends EventKey<T> = EventKey<T>> {
  first: IListener<T, K>;
  last: IListener<T, K>;
}

function addListener<T>(
  cache: { [K in EventKey<T>]?: IListenerList<T, K> },
  key: EventKey<T>,
  cb: IListener<T>
): IListenerList<T> {
  let list = cache[key];
  if (list) {
    list.last.next = cb;
    list.last = cb;
  } else {
    cache[key] = list = { first: cb, last: cb };
  }
  return list!;
}

/** Remove listeners that match the filter function */
function unlink<T>(
  list: IListenerList<T>,
  filter: (cb: IListener<T>) => boolean
): IListenerList<T> | null {
  let prev = null;
  let curr = list.first;
  while (true) {
    // Return true to unlink the listener.
    if (filter(curr)) {
      // Splice it.
      if (prev) {
        prev.next = curr.next;
        if (curr.next) {
          curr = curr.next;
        } else break;
      }
      // Shift it.
      else if (curr.next) {
        list.first = curr = curr.next;
      }
      // No listeners remain.
      else {
        return null;
      }
    }
    // Keep this listener.
    else {
      prev = curr;
      if (curr.next) {
        curr = curr.next;
      } else break;
    }
  }

  // At least one listener remains.
  list.last = prev;
  return list;
}
