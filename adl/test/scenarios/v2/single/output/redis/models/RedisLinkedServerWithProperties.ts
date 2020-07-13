import { RedisLinkedServerProperties } from './RedisLinkedServerProperties';
import { ProxyResource } from './ProxyResource';
/**
 * @description Response to put/get linked server (with properties) for Redis cache.
 * @since 2018-03-01
 */
export interface RedisLinkedServerWithProperties extends ProxyResource {
    /**
     * @description Properties of the linked server.
     * @since 2018-03-01
     */
    properties?: RedisLinkedServerProperties;
}
