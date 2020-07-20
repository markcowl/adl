import { RedisLinkedServerWithProperties } from "./RedisLinkedServerWithProperties";
/**
 * @description List of linked servers (with properties) of a Redis cache.
 * @since 2018-03-01
 */
export interface RedisLinkedServerWithPropertiesList {
    /**
     * @description List of linked servers (with properties) of a Redis cache.
     * @since 2018-03-01
     */
    value?: Array<RedisLinkedServerWithProperties>;
    /**
     * @description Link for next set.
     * @since 2018-03-01
     */
    readonly nextLink?: string;
}
