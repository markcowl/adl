
/**
 * @description The parameters used to check the availability of the vault name.
 */
export interface VaultCheckNameAvailabilityParameters {
    /**
     * @description The vault name.
     */
    name?: string;
    /**
     * @description The type of resource, Microsoft.KeyVault/vaults
     */
    type?: Type;
}
