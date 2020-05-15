import { VaultProperties } from './VaultProperties';
/**
 * 
 * @description Parameters for creating or updating a vault
 */
export interface VaultCreateOrUpdateParameters {
    /**
     * 
     * @description The supported Azure location where the key vault should be created.
     */
    location?: any;
    /**
     * 
     * @description The tags that will be assigned to the key vault.
     */
    tags: any;
    /**
     * 
     * @description Properties of the vault
     */
    properties?: VaultProperties;
}
