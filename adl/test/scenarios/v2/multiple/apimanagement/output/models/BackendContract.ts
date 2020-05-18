import { BackendContractProperties } from './BackendContractProperties';
import { Resource } from './Resource';
/**
 * @description Backend details.
 */
export interface BackendContract extends Resource {
    /**
     * @description Backend entity contract properties.
     */
    properties: BackendContractProperties;
}
