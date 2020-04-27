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

export class MinimumConstraint extends Constraint {
  constructor(public minimum: number, initializer?: Partial<MinimumConstraint>) {
    super('Minimum');
    this.initialize(initializer);
  }
}
export class MaximumConstraint extends Constraint {
  constructor(public maximum: number, initializer?: Partial<MaximumConstraint>) {
    super('Maximum');
    this.initialize(initializer);
  }
}
export class ExclusiveMinimumConstraint extends Constraint {
  constructor(public minimum: number, initializer?: Partial<ExclusiveMinimumConstraint>) {
    super('ExclusiveMinimum');
    this.initialize(initializer);
  }
}
export class ExclusiveMaximumConstraint extends Constraint {
  constructor(public maximum: number, initializer?: Partial<ExclusiveMaximumConstraint>) {
    super('ExclusiveMaximum');
    this.initialize(initializer);
  }
}

export class MultipleOfConstraint extends Constraint {
  constructor(public multipleOf: number, initializer?: Partial<MultipleOfConstraint>) {
    super('MultipleOf');
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

export class Int32Primitive extends Primitive {
  constructor(initializer?: Partial<Int32Primitive>) {
    super('int32');
    this.initialize(initializer);
  }
}

export class Int64Primitive extends Primitive {
  constructor(initializer?: Partial<Int64Primitive>) {
    super('int64');
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
  #int32?: Int32Primitive;
  #int64?: Int64Primitive;

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
  get Int32(): Int32Primitive {
    return this.#int32 || (this.addPrimitive(this.#int32 = new Int32Primitive()));
  }
  get Int64(): Int64Primitive {
    return this.#int64 || (this.addPrimitive(this.#int64 = new Int64Primitive()));
  }

  objects = new ElementArray<ObjectSchema>(this, 'objects');
  constants = new ElementArray<Constant>(this, 'constants');
  enums = new ElementArray<Enum>(this, 'enums');
  constraints = new ElementArray<Constraint>(this, 'constraints');
  defaults = new ElementArray<Default>(this, 'defaults');
  aliases = new ElementArray<Alias>(this, 'aliases');
  primitives = new ElementArray<Primitive>(this, 'primitives');
}
