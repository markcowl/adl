/* Parameter Declarations */

/** Indicates a Request Body for an HTTP call */
export type Body<ParameterType, MediaType extends string = 'any'> = Parameter<'body', ParameterType, MediaType>;

/** Indicates a Path parameter for an HTTP call. The parameter may not be optional. */
export type Path<ParameterType, serializedName extends string = undefined> = Parameter<'path', ParameterType, serializedName>;

/** Indicates a Query parameter for an HTTP call */
export type Query<ParameterType, serializedName extends string = undefined> = Parameter<'query', ParameterType, serializedName>;

/** Indicates a Header parameter for an HTTP call */
export type Header<ParameterType, serializedName extends string = undefined> = Parameter<'header', ParameterType, serializedName>;

/** Indicates a Cookie parameter for an HTTP call */
export type Cookie<ParameterType, serializedName extends string = undefined> = Parameter<'cookie', ParameterType, serializedName>;

/** Parameter Locations */
export type ParameterLocation = 'query' | 'path' | 'cookie' | 'header' | 'body';

/** A parameter for an HTTP call
 * @argument Location - Location where the parameter is sent. Must be one of type @see ParameterLocation
 * @argument ParameterType - the schema/type of the parameter.
 * @argument SerializedName - the actual wire name, when different from the parameter name
  */
export interface Parameter<Location extends ParameterLocation, ParameterType, SerializedName extends string = undefined> {
  style: Location;
  type: ParameterType;
  serializedName: SerializedName;
}

export enum MediaType {
  ApplicationJson = 'application/json',
  TextJson = 'text/json',
  ApplicationXml = 'application/xml',
  TextXml = 'text/xml',
  OctetBinary = 'octet/binary',
}
