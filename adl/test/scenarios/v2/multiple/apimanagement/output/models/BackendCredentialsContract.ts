import { BackendAuthorizationHeaderCredentials } from './BackendAuthorizationHeaderCredentials';
/**
 * @description Details of the Credentials used to connect to Backend.
 */
export interface BackendCredentialsContract {
    /**
     * @description List of Client Certificate Thumbprint.
     */
    certificate: Array<string> & MaximumElements<32>;
    /**
     * @description Query Parameter description.
     */
    query: Dictionary<Array<string>>;
    /**
     * @description Header Parameter description.
     */
    header: Dictionary<Array<string>>;
    /**
     * @description Authorization header authentication
     */
    authorization: BackendAuthorizationHeaderCredentials;
}
