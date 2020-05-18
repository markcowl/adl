import { Notification } from './models/Notification';
import { Push } from './models/Push';
import { Recipient } from './models/Recipient';
/**
 * @description Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.
 */
export interface object_192 {
}
/**
 * @description Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export interface object_193 {
    notification: Notification;
}
/**
 * @description Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export interface object_194 {
    notification: Notification;
}
/**
 * @description Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export interface object_195 {
    notification: Notification;
}
/**
 * @description The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
 */
export interface object_196 {
}
export interface object_197 {
    /**
     * @description A signature, generated as an HMAC of each of the above components, using the key secret value.
     */
    mac?: any;
}
export interface object_198 {
    channel: any;
    messageId: any;
}
export interface object_199 {
    channel: any;
    messageId: any;
}
export interface object_200 {
    channel: any;
    messageId: any;
}
export interface object_201 {
    /**
     * @description Channel name.
     */
    channel: any;
    /**
     * @description Must be set when clientId is empty, cannot be used with clientId.
     */
    deviceId: any;
}
export interface object_202 {
    /**
     * @description Channel name.
     */
    channel: any;
    /**
     * @description Must be set when deviceId is empty, cannot be used with deviceId.
     */
    clientId: any;
}
export interface object_203 {
    /**
     * @description Channel name.
     */
    channel: any;
    /**
     * @description Must be set when clientId is empty, cannot be used with clientId.
     */
    deviceId: any;
}
export interface object_204 {
    /**
     * @description Channel name.
     */
    channel: any;
    /**
     * @description Must be set when deviceId is empty, cannot be used with deviceId.
     */
    clientId: any;
}
export interface object_205 {
    /**
     * @description Channel name.
     */
    channel: any;
    /**
     * @description Must be set when clientId is empty, cannot be used with clientId.
     */
    deviceId: any;
}
export interface object_206 {
    /**
     * @description Channel name.
     */
    channel: any;
    /**
     * @description Must be set when deviceId is empty, cannot be used with deviceId.
     */
    clientId: any;
}
export interface object_207 {
    push: Push;
    recipient?: Recipient;
}
export interface object_208 {
    push: Push;
    recipient?: Recipient;
}
export interface object_209 {
    push: Push;
    recipient?: Recipient;
}
export interface object_210 {
}
