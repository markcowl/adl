import { IdentityProviderBaseParameters } from './IdentityProviderBaseParameters';
/** @since 2019-12-01 */
export interface IdentityProviderContractProperties extends IdentityProviderBaseParameters {
    /** @since 2019-12-01 */
    clientId?: string & MinLength<1>;
    /** @since 2019-12-01 */
    clientSecret: string & MinLength<1>;
}
