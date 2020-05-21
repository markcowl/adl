import { NotificationContractProperties } from './NotificationContractProperties';
import { Resource } from './Resource';
/**
 * @description Notification details.
 */
export interface NotificationContract extends Resource {
    /**
     * @description Notification entity contract properties.
     */
    properties: NotificationContractProperties;
}
