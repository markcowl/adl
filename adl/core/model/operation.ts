import { Element } from './element';

export class Operation extends Element {

}

export class Response extends Element {

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