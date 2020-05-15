import { VaultProperties } from './VaultProperties';
/**
 * 
 * @description Resource information with extended details.
 */
export interface Vault {
    /**
     * 
     * @description Fully qualified identifier of the key vault resource.
     */
    readonly id: any;
    /**
     * 
     * @description Name of the key vault resource.
     */
    readonly name: any;
    /**
     * 
     * @description Resource type of the key vault resource.
     */
    readonly type: any;
    /**
     * 
     * @description Azure location of the key vault resource.
     */
    location: any;
    /**
     * 
     * @description Tags assigned to the key vault resource.
     */
    tags: any;
    /**
     * 
     * @description Properties of the vault
     */
    properties?: VaultProperties;
}
