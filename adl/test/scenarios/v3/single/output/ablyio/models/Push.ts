import { Notification } from './Notification';
/**
 * @since 1.1.0
 */
export interface Push {
    /** @since 1.1.0 */
    apns: {
        /**
         * @since 1.1.0
         */
        notification: Notification;
    };
    /** @since 1.1.0 */
    data: string;
    /** @since 1.1.0 */
    fcm: {
        /**
         * @since 1.1.0
         */
        notification: Notification;
    };
    /**
     * @since 1.1.0
     */
    notification: Notification;
    /** @since 1.1.0 */
    web: {
        /**
         * @since 1.1.0
         */
        notification: Notification;
    };
}
