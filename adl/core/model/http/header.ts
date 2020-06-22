import { Element } from '../element';
import { SchemaTypeReference } from '../schema/type';

export class HeaderElement {
  
}

export class Header extends Element {
  /** description of the HTTP Header */
  description?: string;

  /**
   * @param name The name of the header
   * @param typeRef The schema of the header
   */
  constructor(public name: string, public typeRef: SchemaTypeReference, initializer?: Partial<Header>) {
    super();
    this.initialize(initializer);
  }
}

