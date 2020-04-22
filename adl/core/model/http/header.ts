import { Element } from '../element';
import { Schema } from '../schema';


export class HttpHeader extends Element {
  // the header name in container. might not be unique in parent? 
  $key!: string;

  /** description of the HTTP Header */
  description?: string;

  /** the serialization style of the header */
  style: any;

  /** the schema for the header */
  schema?: Schema;

  constructor(initializer?: Partial<HttpHeader>) {
    super();
    this.apply(initializer);
  }
}