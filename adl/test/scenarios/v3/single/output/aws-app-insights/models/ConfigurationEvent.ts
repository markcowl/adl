import { ConfigurationEventResourceType } from '../ConfigurationEventResourceType';
import { ConfigurationEventStatus } from '../ConfigurationEventStatus';
/**
 * @description  The event information.
 */
export interface ConfigurationEvent {
    /**
     * @description  The resource monitored by Application Insights.
     */
    MonitoredResourceARN: any;
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
    EventTime: any;
    /**
     * @description  The details of the event in plain text.
     */
    EventDetail: any;
    /**
     * @description  The name of the resource Application Insights attempted to configure.
     */
    EventResourceName: any;
}
