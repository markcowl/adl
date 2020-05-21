import { IdentityProviderContractProperties } from './IdentityProviderContractProperties';
import { Resource } from './Resource';
/**
 * @description Identity Provider details.
 */
export interface IdentityProviderContract extends Resource {
    /**
     * @description Identity Provider contract properties.
     */
    properties: IdentityProviderContractProperties;
}
