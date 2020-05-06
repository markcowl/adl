import { anonymous } from '@azure-tools/sourcemap';
import { Element, ElementArray } from '../element';
import { Schema } from '../schema';


export class Payload extends Element {
  
  /**
   * @param mediaType the IANA media type (content-type) for this payload
   * @param schema the schema type to use for this payload
   * @param initializer an object initializer
   */
  constructor(mediaType: string, schema: Schema, initializer?: Partial<Payload>) {
    super();
    this.initialize(initializer);
    
  }
} 

export type BodyName = string | anonymous;


export class Body extends Element {
  /**
   * description of the Body
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;


  /**
   * if set, indicates the request body must be included.
   */
  required?: boolean;

  payloads = new ElementArray<Payload>();
  
  /**
   * 
   * @param name the name of this body definition
   * @param initializer the object initializer
   */
  constructor(public name: BodyName,  initializer?: Partial<Body>) {
    super();
    this.initialize(initializer);
  }
}