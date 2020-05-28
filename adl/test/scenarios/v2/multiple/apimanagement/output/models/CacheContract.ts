import { Resource } from './Resource';
import { CacheContractProperties } from './CacheContractProperties';
/**
 * @description Cache details.
 * @since 2019-12-01
 */
export interface CacheContract extends Resource {
    /**
     * @description Cache properties details.
     * @since 2019-12-01
     */
    properties: CacheContractProperties;
}
