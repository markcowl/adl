import { DeletedVaultProperties } from './DeletedVaultProperties';
/**
 * 
 * @description Deleted vault information with extended details.
 */
export interface DeletedVault {
    /**
     * 
     * @description The resource ID for the deleted key vault.
     */
    readonly id: any;
    /**
     * 
     * @description The name of the key vault.
     */
    readonly name: any;
    /**
     * 
     * @description The resource type of the key vault.
     */
    readonly type: any;
    /**
     * 
     * @description Properties of the vault
     */
    properties: DeletedVaultProperties;
}
