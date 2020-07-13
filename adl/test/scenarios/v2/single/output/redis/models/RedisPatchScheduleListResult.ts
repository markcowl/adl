import { RedisPatchSchedule } from './RedisPatchSchedule';
/**
 * @description The response of list patch schedules Redis operation.
 * @since 2018-03-01
 */
export interface RedisPatchScheduleListResult {
    /**
     * @description Results of the list patch schedules operation.
     * @since 2018-03-01
     */
    value?: Array<RedisPatchSchedule>;
    /**
     * @description Link for next page of results.
     * @since 2018-03-01
     */
    readonly nextLink?: string;
}
