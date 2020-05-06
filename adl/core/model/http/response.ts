import { anonymous } from '@azure-tools/sourcemap';
import { Alias } from '../alias';
import { ElementArray } from '../element';
import * as base from '../operation';
import { Payload } from './body';
import { Header } from './header';

export type ResponseName = string | anonymous;

export class Response extends base.Response {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  headers = new ElementArray<Header|Alias<Header>>();

  payloads = new ElementArray<Payload>();
  constructor(public name: ResponseName, initializer?: Partial<Response> ) {
    super();
    this.initialize(initializer);
  }
}
