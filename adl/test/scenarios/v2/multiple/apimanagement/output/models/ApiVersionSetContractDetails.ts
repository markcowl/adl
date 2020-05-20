
/**
 * @description An API Version Set contains the common configuration for a set of API Versions relating
 */
export interface ApiVersionSetContractDetails {
    /**
     * @description Identifier for existing API Version Set. Omit this value to create a new Version Set.
     */
    id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The display Name of the API Version Set.
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Description of API Version Set.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description An value that determines where the API Version identifer will be located in a HTTP request.
     */
    versioningScheme: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    versionQueryName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    versionHeaderName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
