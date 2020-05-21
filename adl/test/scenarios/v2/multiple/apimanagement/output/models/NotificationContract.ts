import { Resource } from './Resource';
import { NotificationContractProperties } from './NotificationContractProperties';
/**
 * @description Notification details.
 */
export interface NotificationContract extends Resource {
    /**
     * @description Notification entity contract properties.
     */
    properties: NotificationContractProperties;
}
