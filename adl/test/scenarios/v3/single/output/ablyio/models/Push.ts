import { Notification } from './Notification';
import { object_181 } from './object_181';
import { object_182 } from './object_182';
import { object_183 } from './object_183';
export interface Push {
    /**
     * @description Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    apns: object_181;
    /**
     * @description Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).
     */
    data: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    fcm: object_182;
    notification: Notification;
    /**
     * @description Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    web: object_183;
}
