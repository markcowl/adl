import { Sku } from './Sku';
import { RedisCommonProperties } from './RedisCommonProperties';
/**
 * @description Patchable properties of the redis cache.
 * @since 2018-03-01
 */
export interface RedisUpdateProperties extends RedisCommonProperties {
    /**
     * @description The SKU of the Redis cache to deploy.
     * @since 2018-03-01
     */
    sku?: Sku;
}
