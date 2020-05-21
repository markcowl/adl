
/**
 * @description Push recipient details for a device.
 */
export interface Recipient {
    /**
     * @description Client ID of recipient
     */
    clientId: string;
    /**
     * @description Client ID of recipient
     */
    deviceId: string;
    /**
     * @description when using APNs, specifies the required device token.
     */
    deviceToken: string;
    /**
     * @description when using GCM or FCM, specifies the required registration token.
     */
    registrationToken: string;
    /**
     * @description Defines which push platform is being used.
     */
    transportType: enum_19;
}
