import { Resource } from './Resource';
import { PolicyContractProperties } from './PolicyContractProperties';
/** @since 2019-12-01 */
export interface PolicyContract extends Resource {
    /** @since 2019-12-01 */
    properties: PolicyContractProperties;
}
