export interface TokenRequest {
    /**
     * @description The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName.
     */
    capability?: {};
    /**
     * @description The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.
     */
    clientId: any;
    /**
     * @description Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key.
     */
    keyName?: any;
    /**
     * @description An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused.
     */
    nonce?: any;
    /**
     * @description Time of creation of the Ably TokenRequest.
     */
    timestamp?: any;
}
