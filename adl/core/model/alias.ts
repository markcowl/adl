import { Element } from './element';
import { Identity } from './types';

export class Alias<T> extends Element {
  // 
  constructor(public aliasType: string, public name: Identity, public target: T, initializer?: Partial<Alias<T>>) {
    super();
    this.initialize(initializer);
  }
}