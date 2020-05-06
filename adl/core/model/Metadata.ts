import { Contact } from './contact';
import { Element, ElementArray } from './element';
import { License } from './license';
import { Reference } from './Reference';


export type URL = string;


/** Information about the API Surface */
export class Metadata extends Element {
  /** a short description of the API */
  description?: string;

  /** The Terms of Service for the API. */
  termsOfService?: string;

  /** a collection of contacts responsible for the API  */
  contacts = new ElementArray<Contact>();

  /** a collection of contacts responsible for the API  */
  licenses = new ElementArray<License>();

  /** a collection of reference information regarding the API  */
  references = new ElementArray<Reference>();

  constructor(public name: string, initializer?: Partial<Metadata>) {
    super();
    this.initialize(initializer);
  }
}
