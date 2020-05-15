import { BackendAuthorizationHeaderCredentials } from './BackendAuthorizationHeaderCredentials';
/**
 * 
 * @description Details of the Credentials used to connect to Backend.
 */
export interface BackendCredentialsContract {
    /**
     * 
     * @description List of Client Certificate Thumbprint.
     */
    certificate: any;
    /**
     * 
     * @description Query Parameter description.
     */
    query: any;
    /**
     * 
     * @description Header Parameter description.
     */
    header: any;
    /**
     * 
     * @description Authorization header authentication
     */
    authorization: BackendAuthorizationHeaderCredentials;
}
