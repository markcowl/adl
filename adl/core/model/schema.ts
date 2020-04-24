import { Element, ElementArray } from './element';

export class Schema extends Element {
  anonymous = false;

}

export class ObjectSchema extends Schema {

}

export class Constant extends Schema {

}
export class Enum extends Schema {

}

export class Constraint extends Schema {

}

export class Default extends Schema {
}

export class Alias extends Schema {
  // 
  constructor(public target: Schema, initializer?: Partial<Alias>) {
    super();
    this.initialize(initializer);
  }
}


export class Schemas extends Element {
  objects = new ElementArray<ObjectSchema>(this, 'objects');
  constants = new ElementArray<Constant>(this, 'constants');
  enums = new ElementArray<Enum>(this, 'enums');
  constraints = new ElementArray<Constraint>(this, 'constraints');
  defaults = new ElementArray<Default>(this, 'defaults');
  aliases = new ElementArray<Alias>(this, 'aliases');
}
