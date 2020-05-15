
/**
 * 
 * @description Describes the status of the application.
 */
export interface ApplicationInfo {
    /**
     * 
     * @description The name of the resource group used for the application.
     */
    ResourceGroupName: any;
    /**
     * 
     * @description The lifecycle of the application.
     */
    LifeCycle: any;
    /**
     * 
     * @description  The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications for opsItem updates.
     */
    OpsItemSNSTopicArn: any;
    /**
     * 
     * @description  Indicates whether Application Insights will create opsItems for any problem detected by Application Insights for an application.
     */
    OpsCenterEnabled: any;
    /**
     * 
     * @description  Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
     */
    CWEMonitorEnabled: any;
    /**
     * 
     * @description <p>The issues on the user side that block Application Insights from successfully monitoring an application. Example remarks include:</p> <ul> <li> <p>“Configuring application, detected 1 Errors, 3 Warnings”</p> </li> <li> <p>“Configuring application, detected 1 Unconfigured Components”</p> </li> </ul>
     */
    Remarks: any;
}
