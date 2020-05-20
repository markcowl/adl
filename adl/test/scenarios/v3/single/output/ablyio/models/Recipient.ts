
/**
 * @description Push recipient details for a device.
 */
export interface Recipient {
    /**
     * @description Client ID of recipient
     */
    clientId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Client ID of recipient
     */
    deviceId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description when using APNs, specifies the required device token.
     */
    deviceToken: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description when using GCM or FCM, specifies the required registration token.
     */
    registrationToken: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Defines which push platform is being used.
     */
    transportType: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
