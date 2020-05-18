import { PolicyContractProperties } from './PolicyContractProperties';
import { Resource } from './Resource';
/**
 * @description Policy Contract details.
 */
export interface PolicyContract extends Resource {
    /**
     * @description Properties of the Policy.
     */
    properties: PolicyContractProperties;
}
