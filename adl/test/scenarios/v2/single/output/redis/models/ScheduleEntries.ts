import { ScheduleEntry } from './ScheduleEntry';
/**
 * @description List of patch schedules for a Redis cache.
 * @since 2018-03-01
 */
export interface ScheduleEntries {
    /**
     * @description List of patch schedules for a Redis cache.
     * @clientName ScheduleEntries
     * @since 2018-03-01
     */
    scheduleEntries: Array<ScheduleEntry>;
}
