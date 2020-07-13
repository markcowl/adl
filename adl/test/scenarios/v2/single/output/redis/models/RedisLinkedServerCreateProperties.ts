import { ReplicationRole } from '../enums/ReplicationRole';
/**
 * @description Create properties for a linked server
 * @since 2018-03-01
 */
export interface RedisLinkedServerCreateProperties {
    /**
     * @description Fully qualified resourceId of the linked redis cache.
     * @since 2018-03-01
     */
    linkedRedisCacheId: string;
    /**
     * @description Location of the linked redis cache.
     * @since 2018-03-01
     */
    linkedRedisCacheLocation: string;
    /**
     * @description Role of the linked server.
     * @since 2018-03-01
     */
    serverRole: ReplicationRole;
}
