
/**
 * @description The object attributes managed by the KeyVault service.
 */
export interface Attributes {
    /**
     * @description Determines whether the object is enabled.
     */
    enabled: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Not before date in seconds since 1970-01-01T00:00:00Z.
     * @clientName NotBefore
     */
    nbf: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Expiry date in seconds since 1970-01-01T00:00:00Z.
     * @clientName Expires
     */
    exp: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Creation time in seconds since 1970-01-01T00:00:00Z.
     */
    readonly created: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Last updated time in seconds since 1970-01-01T00:00:00Z.
     */
    readonly updated: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
