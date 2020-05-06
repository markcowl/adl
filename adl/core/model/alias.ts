import { anonymous } from '@azure-tools/sourcemap';
import { Element } from './element';

export class Alias<T> extends Element {
  // 
  constructor(public aliasType: string, public name: string|anonymous, public target: T, initializer?: Partial<Alias<T>>) {
    super();
    this.initialize(initializer);
  }
}