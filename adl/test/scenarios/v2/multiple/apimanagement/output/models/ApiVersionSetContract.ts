import { ApiVersionSetContractProperties } from './ApiVersionSetContractProperties';
import { Resource } from './Resource';
/**
 * @description Api Version Set Contract details.
 */
export interface ApiVersionSetContract extends Resource {
    /**
     * @description Api VersionSet contract properties.
     */
    properties: ApiVersionSetContractProperties;
}
