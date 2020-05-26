import { Recipient } from './Recipient';
/**
 * @since 1.1.0
 */
export interface DeviceDetails {
    /** @since 1.1.0 */
    clientId: string;
    /** @since 1.1.0 */
    deviceSecret: string;
    /** @since 1.1.0 */
    formFactor: "phone" | "tablet" | "desktop" | "tv" | "watch" | "car" | "embedded";
    /** @since 1.1.0 */
    id: string;
    /** @since 1.1.0 */
    metadata: {};
    /** @since 1.1.0 */
    platform: "ios" | "android";
    /**
     * @since 1.1.0
     */
    'push.recipient': Recipient;
    /** @since 1.1.0 */
    readonly 'push.state': "Active" | "Failing" | "Failed";
}
