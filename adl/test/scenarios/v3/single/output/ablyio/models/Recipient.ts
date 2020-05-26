
/** @since 1.1.0 */
export interface Recipient {
    /** @since 1.1.0 */
    clientId: string;
    /** @since 1.1.0 */
    deviceId: string;
    /** @since 1.1.0 */
    deviceToken: string;
    /** @since 1.1.0 */
    registrationToken: string;
    /** @since 1.1.0 */
    transportType: "apns" | "fcm" | "gcm";
}
