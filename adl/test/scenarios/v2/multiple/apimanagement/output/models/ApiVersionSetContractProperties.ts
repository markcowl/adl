import { ApiVersionSetEntityBase } from './ApiVersionSetEntityBase';
/**
 * @description Properties of an API Version Set.
 */
export interface ApiVersionSetContractProperties extends ApiVersionSetEntityBase {
    /**
     * @description Name of API Version Set
     */
    displayName?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description An value that determines where the API Version identifer will be located in a HTTP request.
     */
    versioningScheme?: versioningScheme;
}
