import { RecipientsContractProperties } from './RecipientsContractProperties';
/**
 * 
 * @description Notification Contract properties.
 */
export interface NotificationContractProperties {
    /**
     * 
     * @description Title of the Notification.
     */
    title?: any;
    /**
     * 
     * @description Description of the Notification.
     */
    description: any;
    /**
     * 
     * @description Recipient Parameter values.
     */
    recipients: RecipientsContractProperties;
}
