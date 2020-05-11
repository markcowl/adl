import { Identity } from '../name';
import * as base from '../operation';
import { Schema } from '../schema';
export class Request extends base.Request {
  /**
 * description of the request
 * CommonMark syntax MAY be used for rich text representation.
 */
  description?: string;

  /** a name for the request (body parameter) */
  name?: string;

  /**
   * if set, indicates the request body must be included.
   */
  required?: boolean;
  /**
   * @param mediaType the IANA media type (content-type) for this payload
   * @param schema the schema type to use for this payload
   * @param initializer an object initializer
   */
  constructor(public identity: Identity, public mediaType: string, public schema: Schema, initializer?: Partial<Request>) {
    super();
    this.initialize(initializer);
  }
}
