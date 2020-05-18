import { VaultPatchProperties } from './VaultPatchProperties';
/**
 * @description Parameters for creating or updating a vault
 */
export interface VaultPatchParameters {
    /**
     * @description The tags that will be assigned to the key vault.
     */
    tags: any;
    /**
     * @description Properties of the vault
     */
    properties: VaultPatchProperties;
}
