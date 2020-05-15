import { Resource } from './Resource';
import { ApiVersionSetContractProperties } from './ApiVersionSetContractProperties';
/**
 * 
 * @description Api Version Set Contract details.
 */
export interface ApiVersionSetContract extends Resource {
    /**
     * 
     * @description Api VersionSet contract properties.
     */
    properties: ApiVersionSetContractProperties;
}
