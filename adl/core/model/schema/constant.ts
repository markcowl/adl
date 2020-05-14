import { Schema } from './schema';

export class Constant extends Schema {
  constructor(public valueSchema: Schema, public value: any, initializer?: Partial<Constant>) {
    super('constant');
    this.initialize(initializer);
  }
}
