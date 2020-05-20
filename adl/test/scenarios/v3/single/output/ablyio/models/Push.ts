import { Notification } from './Notification';
export interface Push {
    /**
     * @description Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    apns: {
        notification: Notification;
    };
    /**
     * @description Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).
     */
    data: any;
    /**
     * @description Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    fcm: {
        notification: Notification;
    };
    notification: Notification;
    /**
     * @description Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    web: {
        notification: Notification;
    };
}
