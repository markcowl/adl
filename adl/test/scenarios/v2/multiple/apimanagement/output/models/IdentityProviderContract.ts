import { Resource } from './Resource';
import { IdentityProviderContractProperties } from './IdentityProviderContractProperties';
/** @since 2019-12-01 */
export interface IdentityProviderContract extends Resource {
    /** @since 2019-12-01 */
    properties: IdentityProviderContractProperties;
}
