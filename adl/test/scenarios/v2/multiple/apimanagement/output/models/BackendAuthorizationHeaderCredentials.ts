
/**
 * @description Authorization header information.
 */
export interface BackendAuthorizationHeaderCredentials {
    /**
     * @description Authentication Scheme name.
     */
    scheme?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Authentication Parameter value.
     */
    parameter?: string & MaxLength<300> & MinLength<1>;
}
