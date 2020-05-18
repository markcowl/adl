
/**
 * @description Describes an anomaly or error with the application.
 */
export interface Observation {
    /**
     * @description The ID of the observation type.
     */
    Id: any;
    /**
     * @description The time when the observation was first detected, in epoch seconds.
     */
    StartTime: any;
    /**
     * @description The time when the observation ended, in epoch seconds.
     */
    EndTime: any;
    /**
     * @description The source type of the observation.
     */
    SourceType: any;
    /**
     * @description The source resource ARN of the observation.
     */
    SourceARN: any;
    /**
     * @description The log group name.
     */
    LogGroup: any;
    /**
     * @description The timestamp in the CloudWatch Logs that specifies when the matched line occurred.
     */
    LineTime: any;
    /**
     * @description The log text of the observation.
     */
    LogText: any;
    /**
     * @description The log filter of the observation.
     */
    LogFilter: LogFilter;
    /**
     * @description The namespace of the observation metric.
     */
    MetricNamespace: any;
    /**
     * @description The name of the observation metric.
     */
    MetricName: any;
    /**
     * @description The unit of the source observation metric.
     */
    Unit: any;
    /**
     * @description The value of the source observation metric.
     */
    Value: any;
    /**
     * @description  The ID of the CloudWatch Event-based observation related to the detected problem.
     */
    CloudWatchEventId: any;
    /**
     * @description  The source of the CloudWatch Event.
     */
    CloudWatchEventSource: CloudWatchEventSource;
    /**
     * @description  The detail type of the CloudWatch Event-based observation, for example, <code>EC2 Instance State-change Notification</code>.
     */
    CloudWatchEventDetailType: any;
    /**
     * @description  The Amazon Resource Name (ARN) of the AWS Health Event-based observation.
     */
    HealthEventArn: any;
    /**
     * @description  The service to which the AWS Health Event belongs, such as EC2.
     */
    HealthService: any;
    /**
     * @description  The type of the AWS Health event, for example, <code>AWS_EC2_POWER_CONNECTIVITY_ISSUE</code>.
     */
    HealthEventTypeCode: any;
    /**
     * @description  The category of the AWS Health event, such as <code>issue</code>.
     */
    HealthEventTypeCategory: any;
    /**
     * @description  The description of the AWS Health event provided by the service, such as Amazon EC2.
     */
    HealthEventDescription: any;
    /**
     * @description  The deployment ID of the CodeDeploy-based observation related to the detected problem.
     */
    CodeDeployDeploymentId: any;
    /**
     * @description  The deployment group to which the CodeDeploy deployment belongs.
     */
    CodeDeployDeploymentGroup: any;
    /**
     * @description  The status of the CodeDeploy deployment, for example <code>SUCCESS</code> or <code> FAILURE</code>.
     */
    CodeDeployState: any;
    /**
     * @description  The CodeDeploy application to which the deployment belongs.
     */
    CodeDeployApplication: any;
    /**
     * @description  The instance group to which the CodeDeploy instance belongs.
     */
    CodeDeployInstanceGroupId: any;
    /**
     * @description  The state of the instance, such as <code>STOPPING</code> or <code>TERMINATING</code>.
     */
    Ec2State: any;
    /**
     * @description  The X-Ray request fault percentage for this node.
     */
    XRayFaultPercent: any;
    /**
     * @description  The X-Ray request throttle percentage for this node.
     */
    XRayThrottlePercent: any;
    /**
     * @description  The X-Ray request error percentage for this node.
     */
    XRayErrorPercent: any;
    /**
     * @description  The X-Ray request count for this node.
     */
    XRayRequestCount: any;
    /**
     * @description  The X-Ray node request average latency for this node.
     */
    XRayRequestAverageLatency: any;
    /**
     * @description  The name of the X-Ray node.
     */
    XRayNodeName: any;
    /**
     * @description  The type of the X-Ray node.
     */
    XRayNodeType: any;
}
