import { UpgradeNotification } from './UpgradeNotification';
/**
 * @description The response of listUpgradeNotifications.
 * @since 2018-03-01
 */
export interface NotificationListResponse {
    /**
     * @description List of all notifications.
     * @since 2018-03-01
     */
    value?: Array<UpgradeNotification>;
    /**
     * @description Link for next set of notifications.
     * @since 2018-03-01
     */
    readonly nextLink?: string;
}
