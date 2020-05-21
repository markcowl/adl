import { OpenidConnectProviderContractProperties } from './OpenidConnectProviderContractProperties';
import { Resource } from './Resource';
/**
 * @description OpenId Connect Provider details.
 */
export interface OpenidConnectProviderContract extends Resource {
    /**
     * @description OpenId Connect Provider contract properties.
     */
    properties: OpenidConnectProviderContractProperties;
}
