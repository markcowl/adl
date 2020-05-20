import { Extras } from './Extras';
/**
 * @description Message object.
 */
export interface Message {
    /**
     * @description The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.
     */
    clientId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The connection ID of the publisher of this message.
     */
    connectionId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The string encoded payload, with the encoding specified below.
     */
    data: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     */
    encoding: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    extras: Extras;
    /**
     * @description A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).
     */
    readonly id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The event name, if provided.
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Timestamp when the message was received by the Ably, as milliseconds since the epoch.
     */
    readonly timestamp: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
