
/**
 * @description Api Version set base parameters
 */
export interface ApiVersionSetEntityBase {
    /**
     * @description Description of API Version Set.
     */
    description: string;
    /**
     * @description Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    versionQueryName: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    versionHeaderName: string & MaxLength<100> & MinLength<1>;
}
