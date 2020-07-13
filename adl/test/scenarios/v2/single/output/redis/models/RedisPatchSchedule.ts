import { ScheduleEntries } from './ScheduleEntries';
import { ProxyResource } from './ProxyResource';
/**
 * @description Response to put/get patch schedules for Redis cache.
 * @since 2018-03-01
 */
export interface RedisPatchSchedule extends ProxyResource {
    /**
     * @description List of patch schedules for a Redis cache.
     * @since 2018-03-01
     */
    properties: ScheduleEntries;
}
