import { Tag } from './Tag';
/**
 * CreateApplicationRequest
 */
export interface CreateApplicationRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description  When set to <code>true</code>, creates opsItems for any problems detected on an application.
     */
    OpsCenterEnabled: boolean;
    /**
     * @description  Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others.
     */
    CWEMonitorEnabled: boolean;
    /**
     * @description  The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
     */
    OpsItemSNSTopicArn: string & MaxLength<300> & MinLength<20>;
    /**
     * @description List of tags to add to the application. tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    Tags: Array<Tag> & MaximumElements<200> & MinimumElements<0>;
}