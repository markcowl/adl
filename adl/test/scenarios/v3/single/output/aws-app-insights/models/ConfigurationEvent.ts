
/**
 * @description  The event information.
 */
export interface ConfigurationEvent {
    /**
     * @description  The resource monitored by Application Insights.
     */
    MonitoredResourceARN: string;
    /**
     * @description  The status of the configuration update event. Possible values include INFO, WARN, and ERROR.
     */
    EventStatus: ConfigurationEventStatus;
    /**
     * @description  The resource type that Application Insights attempted to configure, for example, CLOUDWATCH_ALARM.
     */
    EventResourceType: ConfigurationEventResourceType;
    /**
     * @description  The timestamp of the event.
     */
    EventTime: dateTime;
    /**
     * @description  The details of the event in plain text.
     */
    EventDetail: string;
    /**
     * @description  The name of the resource Application Insights attempted to configure.
     */
    EventResourceName: string;
}
