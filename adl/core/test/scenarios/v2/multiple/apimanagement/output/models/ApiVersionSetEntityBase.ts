
/**
 * 
 * @description Api Version set base parameters
 */
export interface ApiVersionSetEntityBase {
    /**
     * 
     * @description Description of API Version Set.
     */
    description: any;
    /**
     * 
     * @description Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    versionQueryName: any;
    /**
     * 
     * @description Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    versionHeaderName: any;
}
