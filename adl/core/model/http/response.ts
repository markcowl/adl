import * as base from '../operation';
import { HeaderTypeReference } from '../schema/type';
import { Identity } from '../types';

export class Response extends base.Response {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  headers = new Array<HeaderTypeReference>();

  /**
   * 
   * @param name the name of this response
   * @param mediaType the IANA media response that this maps to.
   * @param initializer object initializer for the response.
   */
  constructor(public name: Identity,public mediaType: string, initializer?: Partial<Response> ) {
    super();
    this.initialize(initializer);
  }
}
