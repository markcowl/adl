
/**
 * @extensible
 * @description Form of an authorization grant, which the client uses to request the access token.
 * @since 2019-12-01
 */
export enum bearerTokenSendingMethods {
    /** Access token will be transmitted in the Authorization header using Bearer schema */
    authorizationHeader = 'authorizationHeader',
    /** Access token will be transmitted as query parameters. */
    query = 'query'
}
