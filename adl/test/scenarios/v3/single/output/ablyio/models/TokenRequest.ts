
/**
 * @since 1.1.0
 */
export interface TokenRequest {
    /** @since 1.1.0 */
    capability?: {};
    /** @since 1.1.0 */
    clientId: string;
    /** @since 1.1.0 */
    keyName?: string;
    /** @since 1.1.0 */
    nonce?: string;
    /** @since 1.1.0 */
    timestamp?: int64;
}
