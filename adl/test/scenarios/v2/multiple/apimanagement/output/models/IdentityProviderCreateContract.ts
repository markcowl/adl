import { IdentityProviderCreateContractProperties } from './IdentityProviderCreateContractProperties';
import { Resource } from './Resource';
/**
 * @description Identity Provider details.
 */
export interface IdentityProviderCreateContract extends Resource {
    /**
     * @description Identity Provider contract properties.
     */
    properties: IdentityProviderCreateContractProperties;
}
