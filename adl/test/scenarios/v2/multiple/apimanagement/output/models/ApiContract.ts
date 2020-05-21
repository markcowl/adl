import { ApiContractProperties } from './ApiContractProperties';
import { Resource } from './Resource';
/**
 * @description Api details.
 */
export interface ApiContract extends Resource {
    /**
     * @description Api entity contract properties.
     */
    properties: ApiContractProperties;
}
