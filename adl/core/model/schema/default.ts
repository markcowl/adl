import { Identity } from '../name';
import { Schema } from './schema';


export class Default extends Schema {
  constructor(public name: Identity, initializer?: Partial<Default>) {
    super('default');
    this.initialize(initializer);
  }
}

export class ServerDefaultValue extends Schema {
  constructor(public value: any, initializer?: Partial<ServerDefaultValue>) {
    super('server-default');
    this.initialize(initializer);
  }
}
