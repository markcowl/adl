import { vendorExtensions } from "./common";

/** 
 * The field name MUST begin with x-, for example, x-internal-id. The value can be null, a primitive, an array or an object. 
 * 
 * While the OpenAPI Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points.
 * The extensions properties are implemented as patterned fields that are always prefixed by "x-".
 * 
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#specification-extensions
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#specification-extensions
 * */
export interface VendorExtensions {
  'x-ms-metadata': any;

  /** Allows extensions to the Swagger Schema. The field name MUST begin with x-, for example, x-internal-id. The value can be null, a primitive, an array or an object. */
  // [key: string]: any;
}

export interface SchemaVendorExtensions {
  'x-ms-enum'?: XMSEnum;
}

/** 
 * @see https://github.com/Azure/autorest/tree/master/docs/extensions#x-ms-enum
 */
export interface XMSEnum {
  name?: string;

  /** 
   * When set to true the enum will be modeled as a string. No validation will
   * happen. When set to false, it will be modeled as an enum if that language
   * supports enums. Validation will happen, irrespective of support of enums in
   * that language.
   */
  modelAsString?: boolean;

  /**
   * When set, this will override the values specified with `enum` while also
   * enabling further customization.
   */
  values?: XMSEnumValue[];
};

export interface XMSEnumValue {
  value: any,
  description?: string,
  name?: string
};
