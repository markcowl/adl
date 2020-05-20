
/**
 * UpdateApplicationRequest
 */
export interface UpdateApplicationRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: any;
    /**
     * @description  When set to <code>true</code>, creates opsItems for any problems detected on an application.
     */
    OpsCenterEnabled: any;
    /**
     * @description  Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
     */
    CWEMonitorEnabled: any;
    /**
     * @description  The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
     */
    OpsItemSNSTopicArn: any;
    /**
     * @description  Disassociates the SNS topic from the opsItem created for detected problems.
     */
    RemoveSNSTopic: any;
}
