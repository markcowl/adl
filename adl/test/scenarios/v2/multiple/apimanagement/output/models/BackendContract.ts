import { Resource } from './Resource';
import { BackendContractProperties } from './BackendContractProperties';
/**
 * @description Backend details.
 */
export interface BackendContract extends Resource {
    /**
     * @description Backend entity contract properties.
     */
    properties: BackendContractProperties;
}
