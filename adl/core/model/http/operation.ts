import { Alias } from '../alias';
import * as base from '../operation';
import { Reference } from '../Reference';
import { Parameter } from './parameter';
import { AuthenticationRequirement, Connection } from './protocol';
import { Request } from './request';
import { Response } from './response';

export class Operation extends base.Operation {
  /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
  tags?: Array<string>;

  /** an aribitrary unique identifier for this operation. */
  id?: string;

  /** parameters common to all the requests(overloads) for this operation */
  parameters = new Array<Parameter|Alias<Parameter>>();

  /** possible requests that can be made for this operation (ie, overloads)  */
  requests = new Array<Request|Alias<Request>>();

  /** non-error outputs from this operation */
  responses = new Array<Response | Alias<Response>>();

  /** a collection of reference information regarding the operation  */
  references = new Array<Reference>();

  /** authentication requirements */
  authenticationRequirements = new Array<AuthenticationRequirement>();

  /** connections */
  connections = new Array<Connection>();

  /**
  * 
  * @param initializer the object initializer for this operation
  */
  constructor(initializer?: Partial<Operation>) {
    super();
    this.initialize(initializer);
  }
}
