import { NotificationContract } from './NotificationContract';
/** @since 2019-12-01 */
export interface NotificationCollection {
    /** @since 2019-12-01 */
    value: Array<NotificationContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}
