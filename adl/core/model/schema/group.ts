import { Identity } from '../name';
import { Schema } from './schema';


export class AnyOfSchema extends Schema {
  constructor(public name: Identity, public oneOrMoreOf: Array<Schema>, initializer?: Partial<AnyOfSchema>) {
    super('AnyOf');
    this.initialize(initializer);
  }
}

export class AndSchema extends Schema {
  constructor(public name: Identity, public allOf: Array<Schema>, initializer?: Partial<AndSchema>) {
    super('And');
    this.initialize(initializer);
  }
}

export class XorSchema extends Schema {
  constructor(public name: Identity, public oneOf: Array<Schema>, initializer?: Partial<XorSchema>) {
    super('Xor');
    this.initialize(initializer);
  }
}
