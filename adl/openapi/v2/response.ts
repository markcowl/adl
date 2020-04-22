import { Dictionary } from '../common/dictionary';
import { Header } from './header';
import { Example } from './example';
import { Schema } from './schema';
import { HttpStatus } from './http-status';
import { VendorExtensions } from '../common/vendor-extensions';
import { JsonReference } from '../common/json-reference';

/** 
 * Describes a single response from an API Operation. 
 * 
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#response-object
 * 
*/
export interface Response {
  /** A short description of the response. Commonmark syntax can be used for rich text representation */
  description: string;
  /** A definition of the response structure. It can be a primitive, an array or an object. If this field does not exist, it means no content is returned as part of the response. As an extension to the Schema Object, its root type value may also be "file". This SHOULD be accompanied by a relevant produces mime-type. */
  schema?: Schema;
  /** A list of headers that are sent with the response. */
  headers?: Dictionary<Header>;
  /** An example of the response message. */
  examples?: Dictionary<Example>;
}

/**
 * An object to hold responses to be reused across operations. Response definitions can be referenced to the ones defined here.
 * This does not define global operation responses.
 *
 * Keys are the name for the response that it defines.
 * 
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#responses-definitions-object
 */
export type Responses = {
  [status in HttpStatus]: Response | JsonReference<Response>;
} & VendorExtensions;
