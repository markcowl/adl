export interface TokenDetails {
    /**
     * @description Regular expression representation of the capabilities of the token.
     */
    capability: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Timestamp of token expiration.
     */
    expires: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Timestamp of token creation.
     */
    issued: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Name of the key used to create the token
     */
    keyName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The Ably Token.
     */
    token: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
