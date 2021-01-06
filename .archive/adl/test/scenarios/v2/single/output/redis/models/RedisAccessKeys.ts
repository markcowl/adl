
/**
 * @description Redis cache access keys.
 * @since 2018-03-01
 */
export interface RedisAccessKeys {
    /**
     * @description The current primary key that clients can use to authenticate with Redis cache.
     * @since 2018-03-01
     */
    readonly primaryKey?: string;
    /**
     * @description The current secondary key that clients can use to authenticate with Redis cache.
     * @since 2018-03-01
     */
    readonly secondaryKey?: string;
}
