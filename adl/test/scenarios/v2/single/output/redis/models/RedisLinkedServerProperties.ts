import { RedisLinkedServerCreateProperties } from "./RedisLinkedServerCreateProperties";
/**
 * @description Properties of a linked server to be returned in get/put response
 * @since 2018-03-01
 */
export interface RedisLinkedServerProperties extends RedisLinkedServerCreateProperties {
    /**
     * @description Terminal state of the link between primary and secondary redis cache.
     * @since 2018-03-01
     */
    readonly provisioningState?: string;
}
