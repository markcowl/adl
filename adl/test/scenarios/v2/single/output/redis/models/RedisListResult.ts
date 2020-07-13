import { RedisResource } from './RedisResource';
/**
 * @description The response of list Redis operation.
 * @since 2018-03-01
 */
export interface RedisListResult {
    /**
     * @description List of Redis cache instances.
     * @since 2018-03-01
     */
    value?: Array<RedisResource>;
    /**
     * @description Link for next page of results.
     * @since 2018-03-01
     */
    readonly nextLink?: string;
}
