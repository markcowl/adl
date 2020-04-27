import { Element, ElementArray } from './element';

export class Schema extends Element {
  anonymous?: boolean;

  /* short description */
  summary?: string;

  /* long description */
  description?: string;

}

export class Property extends Element {
  /** indicates the properts is required */
  required?: boolean;
  constructor(public name: string, public schema: Schema, initializer?: Partial<Property>) {
    super();
    this.initialize(initializer);
  }
}

export class ObjectSchema extends Schema {
  /** the collection of properties that are in this object */
  properties = new ElementArray<Property>(this, 'properties');

  /**  maximum number of properties permitted */
  maxProperties?: number;

  /**  minimum number of properties permitted */
  minProperties?: number;

  constructor(public $key: string, initializer?: Partial<ObjectSchema>) {
    super();
    this.initialize(initializer);
  }
}

export class Constant extends Schema {

}
export class Enum extends Schema {

}

export class Constraint extends Schema {
  constructor(public name: string, initializer?: Partial<Constraint>) {
    super();
    this.initialize(initializer);
  }
}

export class MaxLengthConstraint extends Constraint {
  constructor(public length: number, initializer?: Partial<MaxLengthConstraint>) {
    super('MaxLength');
    this.initialize(initializer);
  }
}


export class MinLengthConstraint extends Constraint {
  constructor(public length: number, initializer?: Partial<MinLengthConstraint>) {
    super('MinLength');
    this.initialize(initializer);
  }
}

export class RegularExpressionConstraint extends Constraint {
  constructor(public length: string, initializer?: Partial<MinLengthConstraint>) {
    super('MinLength');
    this.initialize(initializer);
  }
}
export class Default extends Schema {
}

export class Alias extends Schema {
  constraints = new ElementArray<Constraint>(this, 'constraints');
  // 
  constructor(public target: Schema, initializer?: Partial<Alias>) {
    super();
    this.initialize(initializer);
  }
}

export class Primitive extends Schema {
  constructor(public type: string, initializer?: Partial<Primitive>) {
    super();
    this.initialize(initializer);
  }
}

export class StringPrimitive extends Primitive {
  constructor(initializer?: Partial<StringPrimitive>) {
    super('string');
    this.initialize(initializer);
  }
}

export class CharPrimitive extends Primitive {
  constructor(initializer?: Partial<CharPrimitive>) {
    super('char');
    this.initialize(initializer);
  }
}

export class UnknownSchema extends Primitive {
  constructor(initializer?: Partial<UnknownSchema>) {
    super('unknown');
    this.initialize(initializer);
  }
}

export class AnySchema extends Primitive {
  constructor(initializer?: Partial<AnySchema>) {
    super('any');
    this.initialize(initializer);
  }
}

export class Schemas extends Element {
  addPrimitive<T extends Primitive>(primitive: T): T {
    this.primitives.push(primitive);
    return primitive;
  }
  #unknown?: UnknownSchema;
  #any?: AnySchema;
  #string?: StringPrimitive;
  #char?: CharPrimitive;

  get Unknown(): UnknownSchema {
    return this.#unknown || (this.addPrimitive(this.#unknown = new UnknownSchema()));
  }
  get Any(): AnySchema {
    return this.#any || (this.addPrimitive(this.#any = new AnySchema()));
  }
  get String(): StringPrimitive {
    return this.#string || (this.addPrimitive(this.#string = new StringPrimitive()));
  }
  get Char(): CharPrimitive {
    return this.#char || (this.addPrimitive(this.#char = new CharPrimitive()));
  }

  objects = new ElementArray<ObjectSchema>(this, 'objects');
  constants = new ElementArray<Constant>(this, 'constants');
  enums = new ElementArray<Enum>(this, 'enums');
  constraints = new ElementArray<Constraint>(this, 'constraints');
  defaults = new ElementArray<Default>(this, 'defaults');
  aliases = new ElementArray<Alias>(this, 'aliases');
  primitives = new ElementArray<Primitive>(this, 'primitives');
}
