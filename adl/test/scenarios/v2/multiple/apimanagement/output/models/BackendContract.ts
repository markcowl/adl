import { Resource } from './Resource';
import { BackendContractProperties } from './BackendContractProperties';
/** @since 2019-12-01 */
export interface BackendContract extends Resource {
    /** @since 2019-12-01 */
    properties: BackendContractProperties;
}
