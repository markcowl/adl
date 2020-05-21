import { Resource } from './Resource';
import { IdentityProviderContractProperties } from './IdentityProviderContractProperties';
/**
 * @description Identity Provider details.
 */
export interface IdentityProviderContract extends Resource {
    /**
     * @description Identity Provider contract properties.
     */
    properties: IdentityProviderContractProperties;
}
