import { Vault } from './Vault';
/** @since 2019-09-01 */
export interface VaultListResult {
    /** @since 2019-09-01 */
    value: Array<Vault>;
    /** @since 2019-09-01 */
    nextLink: string;
}
