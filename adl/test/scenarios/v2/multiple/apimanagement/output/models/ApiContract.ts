import { Resource } from './Resource';
import { ApiContractProperties } from './ApiContractProperties';
/**
 * @description Api details.
 * @since 2019-12-01
 */
export interface ApiContract extends Resource {
    /**
     * @description Api entity contract properties.
     * @since 2019-12-01
     */
    properties: ApiContractProperties;
}
