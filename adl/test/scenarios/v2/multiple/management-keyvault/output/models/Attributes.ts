
/**
 * @description The object attributes managed by the KeyVault service.
 */
export interface Attributes {
    /**
     * @description Determines whether the object is enabled.
     */
    enabled: boolean;
    /**
     * @description Not before date in seconds since 1970-01-01T00:00:00Z.
     * @clientName NotBefore
     */
    nbf: time;
    /**
     * @description Expiry date in seconds since 1970-01-01T00:00:00Z.
     * @clientName Expires
     */
    exp: time;
    /**
     * @description Creation time in seconds since 1970-01-01T00:00:00Z.
     */
    readonly created: time;
    /**
     * @description Last updated time in seconds since 1970-01-01T00:00:00Z.
     */
    readonly updated: time;
}
