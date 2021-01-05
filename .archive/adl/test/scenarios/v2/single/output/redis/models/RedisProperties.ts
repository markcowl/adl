import { ProvisioningState } from "../enums/ProvisioningState";
import { RedisAccessKeys } from "./RedisAccessKeys";
import { RedisLinkedServer } from "./RedisLinkedServer";
import { RedisCreateProperties } from "./RedisCreateProperties";
/**
 * @description Properties of the redis cache.
 * @since 2018-03-01
 */
export interface RedisProperties extends RedisCreateProperties {
    /**
     * @description Redis version.
     * @since 2018-03-01
     */
    readonly redisVersion?: string;
    /**
     * @description Redis instance provisioning status.
     * @since 2018-03-01
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * @description Redis host name.
     * @since 2018-03-01
     */
    readonly hostName?: string;
    /**
     * @description Redis non-SSL port.
     * @since 2018-03-01
     */
    readonly port?: int32;
    /**
     * @description Redis SSL port.
     * @since 2018-03-01
     */
    readonly sslPort?: int32;
    /**
     * @description The keys of the Redis cache - not set if this object is not the response to Create or Update redis cache
     * @since 2018-03-01
     */
    readonly accessKeys?: RedisAccessKeys;
    /**
     * @description List of the linked servers associated with the cache
     * @since 2018-03-01
     */
    readonly linkedServers?: Array<RedisLinkedServer>;
}
