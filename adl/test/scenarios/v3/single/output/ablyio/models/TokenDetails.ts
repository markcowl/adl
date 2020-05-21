export interface TokenDetails {
    /**
     * @description Regular expression representation of the capabilities of the token.
     */
    capability: string;
    /**
     * @description Timestamp of token expiration.
     */
    expires: int64;
    /**
     * @description Timestamp of token creation.
     */
    issued: int64;
    /**
     * @description Name of the key used to create the token
     */
    keyName: string;
    /**
     * @description The Ably Token.
     */
    token: string;
}
