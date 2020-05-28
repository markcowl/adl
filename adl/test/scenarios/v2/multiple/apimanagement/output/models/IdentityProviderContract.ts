import { Resource } from './Resource';
import { IdentityProviderContractProperties } from './IdentityProviderContractProperties';
/**
 * @description Identity Provider details.
 * @since 2019-12-01
 */
export interface IdentityProviderContract extends Resource {
    /**
     * @description Identity Provider contract properties.
     * @since 2019-12-01
     */
    properties: IdentityProviderContractProperties;
}
