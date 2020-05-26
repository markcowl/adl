import { Resource } from './Resource';
import { CacheContractProperties } from './CacheContractProperties';
/** @since 2019-12-01 */
export interface CacheContract extends Resource {
    /** @since 2019-12-01 */
    properties: CacheContractProperties;
}
