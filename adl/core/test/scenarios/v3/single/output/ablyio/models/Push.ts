import { object_193, object_194, object_195 } from '../anonymous';
import { Notification } from './Notification';
export interface Push {
    /**
     * 
     * @description Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    apns: object_193;
    /**
     * 
     * @description Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).
     */
    data: any;
    /**
     * 
     * @description Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    fcm: object_194;
    notification: Notification;
    /**
     * 
     * @description Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    web: object_195;
}
