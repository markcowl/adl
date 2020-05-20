import { DeletedVaultProperties } from './DeletedVaultProperties';
/**
 * @description Deleted vault information with extended details.
 */
export interface DeletedVault {
    /**
     * @description The resource ID for the deleted key vault.
     */
    readonly id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The name of the key vault.
     */
    readonly name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The resource type of the key vault.
     */
    readonly type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Properties of the vault
     */
    properties: DeletedVaultProperties;
}
