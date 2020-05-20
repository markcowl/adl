import { VaultProperties } from './VaultProperties';
/**
 * @description Resource information with extended details.
 */
export interface Vault {
    /**
     * @description Fully qualified identifier of the key vault resource.
     */
    readonly id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of the key vault resource.
     */
    readonly name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Resource type of the key vault resource.
     */
    readonly type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Azure location of the key vault resource.
     */
    location: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Tags assigned to the key vault resource.
     */
    tags: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Properties of the vault
     */
    properties?: VaultProperties;
}
