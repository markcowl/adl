import { VaultProperties } from './VaultProperties';
/**
 * @description Parameters for creating or updating a vault
 */
export interface VaultCreateOrUpdateParameters {
    /**
     * @description The supported Azure location where the key vault should be created.
     */
    location?: string;
    /**
     * @description The tags that will be assigned to the key vault.
     */
    tags: Dictionary<string>;
    /**
     * @description Properties of the vault
     */
    properties?: VaultProperties;
}
