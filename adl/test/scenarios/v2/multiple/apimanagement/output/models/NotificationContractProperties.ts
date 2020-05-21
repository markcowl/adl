import { RecipientsContractProperties } from './RecipientsContractProperties';
/**
 * @description Notification Contract properties.
 */
export interface NotificationContractProperties {
    /**
     * @description Title of the Notification.
     */
    title?: string & MaxLength<1000> & MinLength<1>;
    /**
     * @description Description of the Notification.
     */
    description: string;
    /**
     * @description Recipient Parameter values.
     */
    recipients: RecipientsContractProperties;
}
