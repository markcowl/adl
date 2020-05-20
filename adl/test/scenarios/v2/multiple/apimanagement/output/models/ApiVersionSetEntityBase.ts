
/**
 * @description Api Version set base parameters
 */
export interface ApiVersionSetEntityBase {
    /**
     * @description Description of API Version Set.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    versionQueryName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    versionHeaderName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
