import { IdentityProviderContract } from './IdentityProviderContract';
/** @since 2019-12-01 */
export interface IdentityProviderList {
    /** @since 2019-12-01 */
    value: Array<IdentityProviderContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}
