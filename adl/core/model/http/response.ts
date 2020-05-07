import { Alias } from '../alias';
import { ElementArray } from '../element';
import { Identity } from '../name';
import * as base from '../operation';
//import { Payload } from './body';
import { Header } from './header';

export class Response extends base.Response {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  headers = new ElementArray<Header|Alias<Header>>();

  // payloads = new ElementArray<Payload>();
  constructor(public name: Identity, initializer?: Partial<Response> ) {
    super();
    this.initialize(initializer);
  }
}
