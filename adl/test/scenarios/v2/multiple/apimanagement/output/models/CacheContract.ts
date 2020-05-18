import { CacheContractProperties } from './CacheContractProperties';
import { Resource } from './Resource';
/**
 * @description Cache details.
 */
export interface CacheContract extends Resource {
    /**
     * @description Cache properties details.
     */
    properties: CacheContractProperties;
}
