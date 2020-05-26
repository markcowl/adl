
/** @since 2018-11-25 */
export interface Observation {
    /** @since 2018-11-25 */
    Id: string & MaxLength<38> & MinLength<38> & RegularExpression<"o-[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}">;
    /** @since 2018-11-25 */
    StartTime: dateTime;
    /** @since 2018-11-25 */
    EndTime: dateTime;
    /** @since 2018-11-25 */
    SourceType: string;
    /** @since 2018-11-25 */
    SourceARN: string;
    /** @since 2018-11-25 */
    LogGroup: string;
    /** @since 2018-11-25 */
    LineTime: dateTime;
    /** @since 2018-11-25 */
    LogText: string;
    /** @since 2018-11-25 */
    LogFilter: LogFilter;
    /** @since 2018-11-25 */
    MetricNamespace: string;
    /** @since 2018-11-25 */
    MetricName: string;
    /** @since 2018-11-25 */
    Unit: string;
    /** @since 2018-11-25 */
    Value: double;
    /** @since 2018-11-25 */
    CloudWatchEventId: string;
    /** @since 2018-11-25 */
    CloudWatchEventSource: CloudWatchEventSource;
    /** @since 2018-11-25 */
    CloudWatchEventDetailType: string;
    /** @since 2018-11-25 */
    HealthEventArn: string;
    /** @since 2018-11-25 */
    HealthService: string;
    /** @since 2018-11-25 */
    HealthEventTypeCode: string;
    /** @since 2018-11-25 */
    HealthEventTypeCategory: string;
    /** @since 2018-11-25 */
    HealthEventDescription: string;
    /** @since 2018-11-25 */
    CodeDeployDeploymentId: string;
    /** @since 2018-11-25 */
    CodeDeployDeploymentGroup: string;
    /** @since 2018-11-25 */
    CodeDeployState: string;
    /** @since 2018-11-25 */
    CodeDeployApplication: string;
    /** @since 2018-11-25 */
    CodeDeployInstanceGroupId: string;
    /** @since 2018-11-25 */
    Ec2State: string;
    /** @since 2018-11-25 */
    XRayFaultPercent: int64;
    /** @since 2018-11-25 */
    XRayThrottlePercent: int64;
    /** @since 2018-11-25 */
    XRayErrorPercent: int64;
    /** @since 2018-11-25 */
    XRayRequestCount: int64;
    /** @since 2018-11-25 */
    XRayRequestAverageLatency: int64;
    /** @since 2018-11-25 */
    XRayNodeName: string;
    /** @since 2018-11-25 */
    XRayNodeType: string;
}
