import { versioningScheme } from '../enums/versioningScheme';
import { ApiVersionSetEntityBase } from './ApiVersionSetEntityBase';
/**
 * @description Properties used to create or update an API Version Set.
 */
export interface ApiVersionSetUpdateParametersProperties extends ApiVersionSetEntityBase {
    /**
     * @description Name of API Version Set
     */
    displayName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description An value that determines where the API Version identifer will be located in a HTTP request.
     */
    versioningScheme: versioningScheme;
}
