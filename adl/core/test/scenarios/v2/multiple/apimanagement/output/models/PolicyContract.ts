import { Resource } from './Resource';
import { PolicyContractProperties } from './PolicyContractProperties';
/**
 * 
 * @description Policy Contract details.
 */
export interface PolicyContract extends Resource {
    /**
     * 
     * @description Properties of the Policy.
     */
    properties: PolicyContractProperties;
}
