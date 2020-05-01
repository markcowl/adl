import { Element, ElementArray } from './element';

export class Schema extends Element {
  anonymous?: boolean;

  /* short description */
  summary?: string;

  /* long description */
  description?: string;

  /**
   * 
   * @param type the schema 'type' that this schema represents. 
   * @param initializer optional object initializer
   */
  constructor(public type: string, initializer?: Partial<Schema>) {
    super();
    this.initialize(initializer);
  }

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
  properties = new ElementArray<Property>();

  /**  maximum number of properties permitted */
  maxProperties?: number;

  /**  minimum number of properties permitted */
  minProperties?: number;

  constructor(public $key: string, initializer?: Partial<ObjectSchema>) {
    super('object');
    this.initialize(initializer);
  }
}

export class Constant extends Schema {
  name?: string;
  description?: string;

  constructor(public valueSchema: Schema, public value: any, initializer?: Partial<Constant>) {
    super('constant');
    this.initialize(initializer);
  }
}

export class Enum extends Schema {
  values = new ElementArray<Constant>();
  name?: string;
  sealed = false;

  constructor(public elementSchema: Schema, initializer?: Partial<Enum>) {
    super('enum');
    this.initialize(initializer);
  }
}

export class Constraint extends Schema {
  constructor(public name: string, initializer?: Partial<Constraint>) {
    super('constraint');
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
  constructor(public length: string, initializer?: Partial<RegularExpressionConstraint>) {
    super('RegularExpression');
    this.initialize(initializer);
  }
}

export class MaximumElementsConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MaximumElementsConstraint>) {
    super('MaximumElements');
    this.initialize(initializer);
  }
}

export class MinimumElementsConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MinimumElementsConstraint>) {
    super('MinimumElements');
    this.initialize(initializer);
  }
}

export class UniqueElementsConstraint extends Constraint {
  constructor(public unique: boolean, initializer?: Partial<UniqueElementsConstraint>) {
    super('UniqueElements');
    this.initialize(initializer);
  }
}


export class Default extends Schema {
}

export class Alias extends Schema {
  constraints = new ElementArray<Constraint>();
  // 
  constructor(public targetSchema: Schema, initializer?: Partial<Alias>) {
    super('alias');
    this.initialize(initializer);
  }
}

export class Primitive extends Schema {
  constructor(kind: string, initializer?: Partial<Primitive>) {
    super(kind);
    this.initialize(initializer);
  }
}

export class ArraySchema extends Primitive {
  constructor(public elementSchema: Schema, initializer?: Partial<ArraySchema>) {
    super('array');
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

export class BooleanPrimitive extends Primitive {
  constructor(initializer?: Partial<BooleanPrimitive>) {
    super('boolean');
    this.initialize(initializer);
  }
}

export class DoublePrimitive extends Primitive {
  constructor(initializer?: Partial<DoublePrimitive>) {
    super('double');
    this.initialize(initializer);
  }
}

export class FloatPrimitive extends Primitive {
  constructor(initializer?: Partial<FloatPrimitive>) {
    super('float');
    this.initialize(initializer);
  }
}

export class ByteArrayPrimitive extends Primitive {
  constructor(initializer?: Partial<ByteArrayPrimitive>) {
    super('byteArray');
    this.initialize(initializer);
  }
}

export class DatePrimitive extends Primitive {
  constructor(initializer?: Partial<DatePrimitive>) {
    super('date');
    this.initialize(initializer);
  }
}

export class TimePrimitive extends Primitive {
  constructor(initializer?: Partial<TimePrimitive>) {
    super('time');
    this.initialize(initializer);
  }
}

export class DateTimePrimitive extends Primitive {
  constructor(initializer?: Partial<DateTimePrimitive>) {
    super('dateTime');
    this.initialize(initializer);
  }
}

export class DurationPrimitive extends Primitive {
  constructor(initializer?: Partial<DurationPrimitive>) {
    super('duration');
    this.initialize(initializer);
  }
}

export class UuidPrimitive extends Primitive {
  constructor(initializer?: Partial<UuidPrimitive>) {
    super('uuid');
    this.initialize(initializer);
  }
}

export class UriPrimitive extends Primitive {
  constructor(initializer?: Partial<UriPrimitive>) {
    super('uri');
    this.initialize(initializer);
  }
}

export class PasswordPrimitive extends Primitive {
  constructor(initializer?: Partial<PasswordPrimitive>) {
    super('password');
    this.initialize(initializer);
  }
}

export class ODataPrimitive extends Primitive {
  constructor(initializer?: Partial<ODataPrimitive>) {
    super('odata');
    this.initialize(initializer);
  }
}

export class FilePrimitive extends Primitive {
  constructor(initializer?: Partial<FilePrimitive>) {
    super('file');
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
  #boolean?: BooleanPrimitive;
  #double?: DoublePrimitive;
  #float?: FloatPrimitive;
  #byteArray?: ByteArrayPrimitive;
  #date?: DatePrimitive;
  #time?: TimePrimitive;
  #dateTime?: DateTimePrimitive;
  #duration?: DurationPrimitive;
  #uuid?: UuidPrimitive;
  #uri?: UriPrimitive;
  #password?: PasswordPrimitive;
  #odata?: ODataPrimitive;
  #file?: FilePrimitive;

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
  get Boolean(): BooleanPrimitive {
    return this.#boolean || (this.addPrimitive(this.#boolean = new BooleanPrimitive()));
  }
  get Double(): DoublePrimitive {
    return this.#double || (this.addPrimitive(this.#double = new DoublePrimitive()));
  }
  get Float(): FloatPrimitive {
    return this.#float || (this.addPrimitive(this.#float = new FloatPrimitive()));
  }
  get ByteArray(): ByteArrayPrimitive {
    return this.#byteArray || (this.addPrimitive(this.#byteArray = new ByteArrayPrimitive()));
  }
  get Date(): DatePrimitive {
    return this.#date || (this.addPrimitive(this.#date = new DatePrimitive()));
  }
  get Time(): TimePrimitive {
    return this.#time || (this.addPrimitive(this.#time = new TimePrimitive()));
  }
  get DateTime(): DateTimePrimitive {
    return this.#dateTime || (this.addPrimitive(this.#dateTime = new DateTimePrimitive()));
  }
  get Duration(): DurationPrimitive {
    return this.#duration || (this.addPrimitive(this.#duration = new DurationPrimitive()));
  }
  get Uuid(): UuidPrimitive {
    return this.#uuid || (this.addPrimitive(this.#uuid = new UuidPrimitive()));
  }
  get Uri(): UriPrimitive {
    return this.#uri || (this.addPrimitive(this.#uri = new UriPrimitive()));
  }
  get Password(): PasswordPrimitive {
    return this.#password || (this.addPrimitive(this.#password = new PasswordPrimitive()));
  }
  get OData(): ODataPrimitive {
    return this.#odata || (this.addPrimitive(this.#odata = new ODataPrimitive()));
  }
  get File(): FilePrimitive {
    return this.#file || (this.addPrimitive(this.#file = new FilePrimitive()));
  }

  objects = new ElementArray<ObjectSchema>();
  constants = new ElementArray<Constant>();
  enums = new ElementArray<Enum>();
  constraints = new ElementArray<Constraint>();
  defaults = new ElementArray<Default>();
  aliases = new ElementArray<Alias>();
  primitives = new ElementArray<Primitive>();
}
