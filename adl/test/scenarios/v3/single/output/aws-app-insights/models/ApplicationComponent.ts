import { Tier } from '../Tier';
/**
 * @description Describes a standalone resource or similarly grouped resources that the application is made up of.
 */
export interface ApplicationComponent {
    /**
     * @description The name of the component.
     */
    ComponentName: any;
    /**
     * @description The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.
     */
    ResourceType: any;
    /**
     * @description The stack tier of the application component.
     */
    Tier: Tier;
    /**
     * @description Indicates whether the application component is monitored.
     */
    Monitor: any;
}
