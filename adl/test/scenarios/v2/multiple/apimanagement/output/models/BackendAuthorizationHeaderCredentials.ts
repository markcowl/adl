
/** @since 2019-12-01 */
export interface BackendAuthorizationHeaderCredentials {
    /** @since 2019-12-01 */
    scheme?: string & MaxLength<100> & MinLength<1>;
    /** @since 2019-12-01 */
    parameter?: string & MaxLength<300> & MinLength<1>;
}
