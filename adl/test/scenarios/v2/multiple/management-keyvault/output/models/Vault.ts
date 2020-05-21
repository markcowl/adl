import { VaultProperties } from './VaultProperties';
/**
 * @description Resource information with extended details.
 */
export interface Vault {
    /**
     * @description Fully qualified identifier of the key vault resource.
     */
    readonly id: string & ;
    /**
     * @description Name of the key vault resource.
     */
    readonly name: string & ;
    /**
     * @description Resource type of the key vault resource.
     */
    readonly type: string & ;
    /**
     * @description Azure location of the key vault resource.
     */
    location: string;
    /**
     * @description Tags assigned to the key vault resource.
     */
    tags: Dictionary<string>;
    /**
     * @description Properties of the vault
     */
    properties?: VaultProperties;
}
