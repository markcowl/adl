import { ApiReleaseContractProperties } from './ApiReleaseContractProperties';
import { Resource } from './Resource';
/**
 * @description ApiRelease details.
 */
export interface ApiReleaseContract extends Resource {
    /**
     * @description ApiRelease entity contract properties.
     */
    properties: ApiReleaseContractProperties;
}
