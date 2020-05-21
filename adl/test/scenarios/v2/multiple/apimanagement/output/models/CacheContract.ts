import { Resource } from './Resource';
import { CacheContractProperties } from './CacheContractProperties';
/**
 * @description Cache details.
 */
export interface CacheContract extends Resource {
    /**
     * @description Cache properties details.
     */
    properties: CacheContractProperties;
}
