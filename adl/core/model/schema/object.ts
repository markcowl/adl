import { Element } from '../element';
import { Schema } from './schema';

export class ObjectSchema extends Schema {
  /** the collection of properties that are in this object */
  properties = new Array<Property>();

  /**  maximum number of properties permitted */
  maxProperties?: number;

  /**  minimum number of properties permitted */
  minProperties?: number;

  /** schemas that this object extends */
  extends = new Array<Schema>();

  /*
   * the desired name when generating code
   */
  clientName?: string;

  constructor(public name: string, initializer?: Partial<ObjectSchema>) {
    super('object');
    this.initialize(initializer);
  }
}


export class Property extends Element {
  /** indicates the properts is required */
  required?: boolean;

  /**
   * Declares the property as "read only".  
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   */
  readonly?: boolean;

  /**
   * Declares the property as "write only". 
   * A property MUST NOT be marked as both readOnly and writeOnly being true. 
   * Default value is false.
   * 
   */
  writeonly?: boolean;

  /**
   * Description of the property
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * the desired name when generating code.
   */
  clientName?: string;

  constructor(public name: string, public schema: Schema, initializer?: Partial<Property>) {
    super();
    this.initialize(initializer);
  }
}
