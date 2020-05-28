import { Resource } from './Resource';
import { BackendContractProperties } from './BackendContractProperties';
/**
 * @description Backend details.
 * @since 2019-12-01
 */
export interface BackendContract extends Resource {
    /**
     * @description Backend entity contract properties.
     * @since 2019-12-01
     */
    properties: BackendContractProperties;
}
