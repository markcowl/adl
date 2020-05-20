import { RecipientsContractProperties } from './RecipientsContractProperties';
/**
 * @description Notification Contract properties.
 */
export interface NotificationContractProperties {
    /**
     * @description Title of the Notification.
     */
    title?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Description of the Notification.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Recipient Parameter values.
     */
    recipients: RecipientsContractProperties;
}
