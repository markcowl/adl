import { Element } from '../element';
import { Contact } from './contact';
import { License } from './license';
import { ReferenceInfo } from './reference';


/** Information about the API Surface */
export class Metadata extends Element {
  /** a short description of the API */
  description?: string;

  /** The Terms of Service for the API. */
  termsOfService?: string;

  /** a collection of contacts responsible for the API  */
  contacts = new Array<Contact>();

  /** a collection of contacts responsible for the API  */
  licenses = new Array<License>();

  /** a collection of reference information regarding the API  */
  references = new Array<ReferenceInfo>();

  constructor(public name: string, initializer?: Partial<Metadata>) {
    super();
    this.initialize(initializer);
  }
}
