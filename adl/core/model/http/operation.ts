import { Alias } from '../alias';
import { ElementArray } from '../element';
import * as base from '../operation';
import { Reference } from '../Reference';
import { Parameter } from './parameter';
import { Request } from './request';
import { Response } from './response';

export class Operation extends base.Operation {
  /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
  tags?: Array<string>;

  /** an aribitrary unique identifier for this operation. */
  id?: string;

  /** parameters common to all the requests(overloads) for this operation */
  parameters = new ElementArray<Parameter|Alias<Parameter>>();

  /** possible requests that can be made for this operation (ie, overloads)  */
  requests = new ElementArray<Request|Alias<Request>>();

  /** non-error outputs from this operation */
  responses = new ElementArray<Response | Alias<Response>>();

  /** a collection of reference information regarding the operation  */
  references = new ElementArray<Reference>();

  /**
  * 
  * @param initializer the object initializer for this operation
  */
  constructor(initializer?: Partial<Operation>) {
    super();
    this.initialize(initializer);
  }
}
