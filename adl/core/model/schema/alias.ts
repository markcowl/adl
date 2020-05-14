import { Identity } from '../name';
import { Constraint } from './constraint';
import { Default } from './default';
import { Schema } from './schema';


export class Alias extends Schema {
  aliasType = 'schema';
  constraints = new Array<Constraint>();
  defaults = new Array<Default>();
  // 
  constructor(public name: Identity, public targetSchema: Schema, initializer?: Partial<Alias>) {
    super('alias');
    this.initialize(initializer);
  }
}
