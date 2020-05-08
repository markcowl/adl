import { Alias } from '../alias';
import { Identity } from '../name';
import * as base from '../operation';
import { Header } from './header';

export class Response extends base.Response {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  headers = new Array<Header|Alias<Header>>();

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
