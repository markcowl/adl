import { RedisProperties } from './RedisProperties';
import { TrackedResource } from './TrackedResource';
/**
 * @description A single Redis item in List or Get Operation.
 * @since 2018-03-01
 */
export interface RedisResource extends TrackedResource {
    /**
     * @description Redis cache properties.
     * @since 2018-03-01
     */
    properties: RedisProperties;
    /**
     * @description A list of availability zones denoting where the resource needs to come from.
     * @since 2018-03-01
     */
    zones?: Array<string>;
}
