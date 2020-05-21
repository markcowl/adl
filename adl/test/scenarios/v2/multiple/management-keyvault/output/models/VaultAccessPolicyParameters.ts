import { VaultAccessPolicyProperties } from './VaultAccessPolicyProperties';
/**
 * @description Parameters for updating the access policy in a vault
 */
export interface VaultAccessPolicyParameters {
    /**
     * @description The resource id of the access policy.
     */
    readonly id: string & ;
    /**
     * @description The resource name of the access policy.
     */
    readonly name: string & ;
    /**
     * @description The resource name of the access policy.
     */
    readonly type: string & ;
    /**
     * @description The resource type of the access policy.
     */
    readonly location: string & ;
    /**
     * @description Properties of the access policy
     */
    properties?: VaultAccessPolicyProperties;
}
