
/** @since 2018-11-25 */
export interface ConfigurationEvent {
    /** @since 2018-11-25 */
    MonitoredResourceARN: string;
    /** @since 2018-11-25 */
    EventStatus: ConfigurationEventStatus;
    /** @since 2018-11-25 */
    EventResourceType: ConfigurationEventResourceType;
    /** @since 2018-11-25 */
    EventTime: dateTime;
    /** @since 2018-11-25 */
    EventDetail: string;
    /** @since 2018-11-25 */
    EventResourceName: string;
}
