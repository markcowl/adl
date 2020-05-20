import { VaultAccessPolicyProperties } from './VaultAccessPolicyProperties';
/**
 * @description Parameters for updating the access policy in a vault
 */
export interface VaultAccessPolicyParameters {
    /**
     * @description The resource id of the access policy.
     */
    readonly id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The resource name of the access policy.
     */
    readonly name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The resource name of the access policy.
     */
    readonly type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The resource type of the access policy.
     */
    readonly location: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Properties of the access policy
     */
    properties?: VaultAccessPolicyProperties;
}
