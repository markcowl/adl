
/**
 * 
 * @description Push recipient details for a device.
 */
export interface Recipient {
    /**
     * 
     * @description Client ID of recipient
     */
    clientId: any;
    /**
     * 
     * @description Client ID of recipient
     */
    deviceId: any;
    /**
     * 
     * @description when using APNs, specifies the required device token.
     */
    deviceToken: any;
    /**
     * 
     * @description when using GCM or FCM, specifies the required registration token.
     */
    registrationToken: any;
    /**
     * 
     * @description Defines which push platform is being used.
     */
    transportType: any;
}
