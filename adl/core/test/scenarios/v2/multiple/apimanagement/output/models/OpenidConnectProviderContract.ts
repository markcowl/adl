import { Resource } from './Resource';
import { OpenidConnectProviderContractProperties } from './OpenidConnectProviderContractProperties';
/**
 * 
 * @description OpenId Connect Provider details.
 */
export interface OpenidConnectProviderContract extends Resource {
    /**
     * 
     * @description OpenId Connect Provider contract properties.
     */
    properties: OpenidConnectProviderContractProperties;
}
