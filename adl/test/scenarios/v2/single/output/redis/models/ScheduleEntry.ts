import { DayOfWeek } from '../enums/DayOfWeek';
/**
 * @description Patch schedule entry for a Premium Redis Cache.
 * @since 2018-03-01
 */
export interface ScheduleEntry {
    /**
     * @description Day of the week when a cache can be patched.
     * @since 2018-03-01
     */
    dayOfWeek: DayOfWeek;
    /**
     * @description Start hour after which cache patching can start.
     * @since 2018-03-01
     */
    startHourUtc: int32;
    /**
     * @description ISO8601 timespan specifying how much time cache patching can take.
     * @since 2018-03-01
     */
    maintenanceWindow?: duration;
}
