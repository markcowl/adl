import { Resource } from './Resource';
import { ApiContractProperties } from './ApiContractProperties';
/**
 * 
 * @description Api details.
 */
export interface ApiContract extends Resource {
    /**
     * 
     * @description Api entity contract properties.
     */
    properties: ApiContractProperties;
}
