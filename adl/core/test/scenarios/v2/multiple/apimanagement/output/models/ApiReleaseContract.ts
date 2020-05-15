import { Resource } from './Resource';
import { ApiReleaseContractProperties } from './ApiReleaseContractProperties';
/**
 * 
 * @description ApiRelease details.
 */
export interface ApiReleaseContract extends Resource {
    /**
     * 
     * @description ApiRelease entity contract properties.
     */
    properties: ApiReleaseContractProperties;
}
