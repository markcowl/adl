import { Alias } from './alias';
import { Element } from './element';
import { Schema } from './schema/schema';

export class Operation extends Element {

  /** A short summary of what the operation does. */
  summary?: string;

  /** A verbose explanation of the operation behavior. Commonmark syntax can be used for rich text representation. */
  description?: string;

  /** parameters common to all the requests(overloads) for this operation */
  parameters = new Array<Parameter|Alias<Parameter>>();

  /** possible requests that can be made for this operation (ie, overloads)  */
  requests = new Array<Request>();
  
  /** possible outputs from this operation */
  responses = new Array<Response | Alias<Response>>();


  /**
   * 
   * @param initializer the object initializer for this operation
   */
  constructor(initializer?: Partial<Operation>) {
    super();
    this.initialize(initializer);
  }
}

export class Response extends Element {
  /** 
   * indicates that this response should be considered and exception (an error)
   */
  isException?:  boolean;

  /** schema for the response content */
  schema?: Schema;
  /**
   * 
   * @param initializer the object initializer for this response
   */
  constructor(initializer?: Partial<Response>) {
    super();
    this.initialize(initializer);
  }
}


export class Parameter extends Element {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /** 
   * determines whether this parameter is mandatory.
   */
  required?: boolean;

  /**
   * 
   * @param name the name of the parameter
   * @param initializer object initializer for this constructor
   */
  constructor(public name: string, initializer?: Partial<Parameter>) {
    super();
    this.initialize(initializer);
  }
}

export class Request extends Element {

}