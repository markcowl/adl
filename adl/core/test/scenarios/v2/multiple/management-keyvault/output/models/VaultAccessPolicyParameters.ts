import { VaultAccessPolicyProperties } from './VaultAccessPolicyProperties';
/**
 * 
 * @description Parameters for updating the access policy in a vault
 */
export interface VaultAccessPolicyParameters {
    /**
     * 
     * @description The resource id of the access policy.
     */
    readonly id: any;
    /**
     * 
     * @description The resource name of the access policy.
     */
    readonly name: any;
    /**
     * 
     * @description The resource name of the access policy.
     */
    readonly type: any;
    /**
     * 
     * @description The resource type of the access policy.
     */
    readonly location: any;
    /**
     * 
     * @description Properties of the access policy
     */
    properties?: VaultAccessPolicyProperties;
}
