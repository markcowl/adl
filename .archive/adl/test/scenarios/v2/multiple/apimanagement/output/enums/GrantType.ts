
/**
 * @extensible
 * @since 2019-12-01
 */
export enum GrantType {
    /** Authorization Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.1. */
    authorizationCode = "authorizationCode",
    /** Implicit Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.2. */
    implicit = "implicit",
    /** Resource Owner Password Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.3. */
    resourceOwnerPassword = "resourceOwnerPassword",
    /** Client Credentials Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.4. */
    clientCredentials = "clientCredentials"
}
