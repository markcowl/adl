import { Type } from '../enums/Type';
/**
 * @description The parameters used to check the availability of the vault name.
 */
export interface VaultCheckNameAvailabilityParameters {
    /**
     * @description The vault name.
     */
    name?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The type of resource, Microsoft.KeyVault/vaults
     */
    type?: Type;
}
