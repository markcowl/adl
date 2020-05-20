import { Notification } from './models/Notification';
/**
 * @description Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.
 */
export interface object_180 {
}
/**
 * @description Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export interface object_181 {
    notification: Notification;
}
/**
 * @description Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export interface object_182 {
    notification: Notification;
}
/**
 * @description Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export interface object_183 {
    notification: Notification;
}
/**
 * @description The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
 */
export interface object_184 {
}
export interface object_185 {
    /**
     * @description A signature, generated as an HMAC of each of the above components, using the key secret value.
     */
    mac?: any;
}
