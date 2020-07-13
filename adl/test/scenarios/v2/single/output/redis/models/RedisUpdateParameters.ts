import { RedisUpdateProperties } from './RedisUpdateProperties';
/**
 * @description Parameters supplied to the Update Redis operation.
 * @since 2018-03-01
 */
export interface RedisUpdateParameters {
    /**
     * @description Redis cache properties.
     * @since 2018-03-01
     */
    properties?: RedisUpdateProperties;
    /**
     * @description Resource tags.
     * @since 2018-03-01
     */
    tags?: Dictionary<string>;
}
