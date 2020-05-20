import { VaultProperties } from './VaultProperties';
/**
 * @description Parameters for creating or updating a vault
 */
export interface VaultCreateOrUpdateParameters {
    /**
     * @description The supported Azure location where the key vault should be created.
     */
    location?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The tags that will be assigned to the key vault.
     */
    tags: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Properties of the vault
     */
    properties?: VaultProperties;
}
