import { Resource } from './Resource';
import { NotificationContractProperties } from './NotificationContractProperties';
/**
 * @description Notification details.
 * @since 2019-12-01
 */
export interface NotificationContract extends Resource {
    /**
     * @description Notification entity contract properties.
     * @since 2019-12-01
     */
    properties: NotificationContractProperties;
}
