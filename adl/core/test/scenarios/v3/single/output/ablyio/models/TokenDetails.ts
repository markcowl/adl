export interface TokenDetails {
    /**
     * 
     * @description Regular expression representation of the capabilities of the token.
     */
    capability: any;
    /**
     * 
     * @description Timestamp of token expiration.
     */
    expires: any;
    /**
     * 
     * @description Timestamp of token creation.
     */
    issued: any;
    /**
     * 
     * @description Name of the key used to create the token
     */
    keyName: any;
    /**
     * 
     * @description The Ably Token.
     */
    token: any;
}
