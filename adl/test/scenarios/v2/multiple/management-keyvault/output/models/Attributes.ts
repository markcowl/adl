
/**
 * @description The object attributes managed by the KeyVault service.
 */
export interface Attributes {
    /**
     * @description Determines whether the object is enabled.
     */
    enabled: any;
    /**
     * @description Not before date in seconds since 1970-01-01T00:00:00Z.
     * @clientName NotBefore
     */
    nbf: any;
    /**
     * @description Expiry date in seconds since 1970-01-01T00:00:00Z.
     * @clientName Expires
     */
    exp: any;
    /**
     * @description Creation time in seconds since 1970-01-01T00:00:00Z.
     */
    readonly created: any;
    /**
     * @description Last updated time in seconds since 1970-01-01T00:00:00Z.
     */
    readonly updated: any;
}
