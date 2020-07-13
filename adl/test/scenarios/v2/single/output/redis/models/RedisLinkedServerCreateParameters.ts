import { RedisLinkedServerCreateProperties } from "./RedisLinkedServerCreateProperties";
/**
 * @description Parameter required for creating a linked server to redis cache.
 * @since 2018-03-01
 */
export interface RedisLinkedServerCreateParameters {
    /**
     * @description Properties required to create a linked server.
     * @since 2018-03-01
     */
    properties: RedisLinkedServerCreateProperties;
}
