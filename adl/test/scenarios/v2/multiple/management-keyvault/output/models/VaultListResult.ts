import { Vault } from './Vault';
/**
 * @description List of vaults
 */
export interface VaultListResult {
    /**
     * @description The list of vaults.
     */
    value: Array<Vault>;
    /**
     * @description The URL to get the next set of vaults.
     */
    nextLink: string;
}
