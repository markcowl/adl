import { RedisCreateProperties } from './RedisCreateProperties';
/**
 * @description Parameters supplied to the Create Redis operation.
 * @since 2018-03-01
 */
export interface RedisCreateParameters {
    /**
     * @description Redis cache properties.
     * @since 2018-03-01
     */
    properties: RedisCreateProperties;
    /**
     * @description A list of availability zones denoting where the resource needs to come from.
     * @since 2018-03-01
     */
    zones?: Array<string>;
    /**
     * @description The geo-location where the resource lives
     * @since 2018-03-01
     */
    location: string;
    /**
     * @description Resource tags.
     * @since 2018-03-01
     */
    tags?: Dictionary<string>;
}
