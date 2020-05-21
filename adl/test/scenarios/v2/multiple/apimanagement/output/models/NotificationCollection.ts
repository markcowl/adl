import { NotificationContract } from './NotificationContract';
/**
 * @description Paged Notification list representation.
 */
export interface NotificationCollection {
    /**
     * @description Page values.
     */
    value: Array<NotificationContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
