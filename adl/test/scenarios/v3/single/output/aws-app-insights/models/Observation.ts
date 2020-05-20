import { CloudWatchEventSource } from '../enums/CloudWatchEventSource';
import { LogFilter } from '../enums/LogFilter';
/**
 * @description Describes an anomaly or error with the application.
 */
export interface Observation {
    /**
     * @description The ID of the observation type.
     */
    Id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The time when the observation was first detected, in epoch seconds.
     */
    StartTime: dateTime;
    /**
     * @description The time when the observation ended, in epoch seconds.
     */
    EndTime: dateTime;
    /**
     * @description The source type of the observation.
     */
    SourceType: string;
    /**
     * @description The source resource ARN of the observation.
     */
    SourceARN: string;
    /**
     * @description The log group name.
     */
    LogGroup: string;
    /**
     * @description The timestamp in the CloudWatch Logs that specifies when the matched line occurred.
     */
    LineTime: dateTime;
    /**
     * @description The log text of the observation.
     */
    LogText: string;
    /**
     * @description The log filter of the observation.
     */
    LogFilter: LogFilter;
    /**
     * @description The namespace of the observation metric.
     */
    MetricNamespace: string;
    /**
     * @description The name of the observation metric.
     */
    MetricName: string;
    /**
     * @description The unit of the source observation metric.
     */
    Unit: string;
    /**
     * @description The value of the source observation metric.
     */
    Value: double;
    /**
     * @description  The ID of the CloudWatch Event-based observation related to the detected problem.
     */
    CloudWatchEventId: string;
    /**
     * @description  The source of the CloudWatch Event.
     */
    CloudWatchEventSource: CloudWatchEventSource;
    /**
     * @description  The detail type of the CloudWatch Event-based observation, for example, <code>EC2 Instance State-change Notification</code>.
     */
    CloudWatchEventDetailType: string;
    /**
     * @description  The Amazon Resource Name (ARN) of the AWS Health Event-based observation.
     */
    HealthEventArn: string;
    /**
     * @description  The service to which the AWS Health Event belongs, such as EC2.
     */
    HealthService: string;
    /**
     * @description  The type of the AWS Health event, for example, <code>AWS_EC2_POWER_CONNECTIVITY_ISSUE</code>.
     */
    HealthEventTypeCode: string;
    /**
     * @description  The category of the AWS Health event, such as <code>issue</code>.
     */
    HealthEventTypeCategory: string;
    /**
     * @description  The description of the AWS Health event provided by the service, such as Amazon EC2.
     */
    HealthEventDescription: string;
    /**
     * @description  The deployment ID of the CodeDeploy-based observation related to the detected problem.
     */
    CodeDeployDeploymentId: string;
    /**
     * @description  The deployment group to which the CodeDeploy deployment belongs.
     */
    CodeDeployDeploymentGroup: string;
    /**
     * @description  The status of the CodeDeploy deployment, for example <code>SUCCESS</code> or <code> FAILURE</code>.
     */
    CodeDeployState: string;
    /**
     * @description  The CodeDeploy application to which the deployment belongs.
     */
    CodeDeployApplication: string;
    /**
     * @description  The instance group to which the CodeDeploy instance belongs.
     */
    CodeDeployInstanceGroupId: string;
    /**
     * @description  The state of the instance, such as <code>STOPPING</code> or <code>TERMINATING</code>.
     */
    Ec2State: string;
    /**
     * @description  The X-Ray request fault percentage for this node.
     */
    XRayFaultPercent: int64;
    /**
     * @description  The X-Ray request throttle percentage for this node.
     */
    XRayThrottlePercent: int64;
    /**
     * @description  The X-Ray request error percentage for this node.
     */
    XRayErrorPercent: int64;
    /**
     * @description  The X-Ray request count for this node.
     */
    XRayRequestCount: int64;
    /**
     * @description  The X-Ray node request average latency for this node.
     */
    XRayRequestAverageLatency: int64;
    /**
     * @description  The name of the X-Ray node.
     */
    XRayNodeName: string;
    /**
     * @description  The type of the X-Ray node.
     */
    XRayNodeType: string;
}
