import { Element } from './element';

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

}


export class Schemas extends Element {
  objects?: Array<ObjectSchema>;
  constants?: Array<Constant>;
  enums?: Array<Enum>;
  constraints?: Array<Constraint>;
  defaults?: Array<Default>;
  aliases?: Array<Alias>;
}
