import { Element, ElementArray } from './element';

export enum ContactRole {
  Author = 'author',
}

export class License extends Element {
  /** A URL to the license used for the API. MUST be in the format of a URL. */
  url?: string;

  /**
   * 
   * @param name The license name used for the API
   * @param initializer an object initializer to set optional object values.
   */
  constructor(public name: string, initializer?: Partial<Contact>) {
    super();
    this.initialize(initializer);
  }
}

export class Contact extends Element {
  /** The identifying name of the contact person/organization. */
  name?: string;

  /** The URL pointing to the contact information. MUST be in the format of a URL. */
  email?: string;

  /** The email address of the contact person/organization. MUST be in the format of an email address */
  url?: string;

  constructor(public role: ContactRole, initializer?: Partial<Contact>) {
    super();
    this.initialize(initializer);
  }
}

/** Information about the API Surface */
export class Metadata extends Element {
  /** a short description of the API */
  description?: string;

  /** The Terms of Service for the API. */
  termsOfService?: string;


  /** a collection of contacts responsible for the API  */
  contacts = new ElementArray<Contact>(this, 'contacts');

  /** a collection of contacts responsible for the API  */
  licenses = new ElementArray<License>(this, 'licenses');

  constructor(public name: string, initializer?: Partial<Metadata>) {
    super();
    this.initialize(initializer);
  }

}
