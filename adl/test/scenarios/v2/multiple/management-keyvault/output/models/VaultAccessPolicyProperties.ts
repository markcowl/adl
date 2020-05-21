import { AccessPolicyEntry } from './AccessPolicyEntry';
/**
 * @description Properties of the vault access policy
 */
export interface VaultAccessPolicyProperties {
    /**
     * @description An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
     */
    accessPolicies?: Array<AccessPolicyEntry>;
}
