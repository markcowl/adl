/** 
 * Well-known extensions that are found on Schema declarations 
 */
export interface SchemaExtensions {
  /** Extended Enum/Contant defnition */
  'x-ms-enum'?: XMSEnum;
}

/** 
 * @see https://github.com/Azure/autorest/tree/master/docs/extensions#x-ms-enum
 */
export interface XMSEnum {
  /** Specifies the name for the Enum */
  name?: string;

  /** 
   * When set to true the enum will be modeled as a string. No validation will
   * happen. When set to false, it will be modeled as an enum if that language
   * supports enums. Validation will happen, irrespective of support of enums in
   * that language.
   * 
   * This can be thought of as "Not Sealed"
   */
  modelAsString?: boolean;

  /**
   * When set, this will override the values specified with `enum` while also
   * enabling further customization.
   */
  values?: Array<XMSEnumValue>;
}

/** 
 * Values in an XMSEnum declaration.
 */
export interface XMSEnumValue {
  /** the actual wire value for the enum */
  value: any;

  /** The text description of the wire value */
  description?: string;

  /** a desired name for the enum value (affects code generation, not wire serialization)  */
  name?: string;
}