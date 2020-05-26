import { Extras } from './Extras';
/**
 * @since 1.1.0
 */
export interface PresenceMessage {
    /** @since 1.1.0 */
    readonly action: "ABSENT" | "PRESENT" | "ENTER" | "LEAVE" | "UPDATE";
    /** @since 1.1.0 */
    clientId: string;
    /** @since 1.1.0 */
    connectionId: string;
    /** @since 1.1.0 */
    data: string;
    /** @since 1.1.0 */
    encoding: string;
    /**
     * @since 1.1.0
     */
    extras: Extras;
    /** @since 1.1.0 */
    readonly id: string;
    /** @since 1.1.0 */
    readonly timestamp: int64;
}
