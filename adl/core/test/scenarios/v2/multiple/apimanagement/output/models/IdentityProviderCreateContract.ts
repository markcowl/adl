import { Resource } from './Resource';
import { IdentityProviderCreateContractProperties } from './IdentityProviderCreateContractProperties';
/**
 * 
 * @description Identity Provider details.
 */
export interface IdentityProviderCreateContract extends Resource {
    /**
     * 
     * @description Identity Provider contract properties.
     */
    properties: IdentityProviderCreateContractProperties;
}
