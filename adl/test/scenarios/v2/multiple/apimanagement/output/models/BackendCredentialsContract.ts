import { BackendAuthorizationHeaderCredentials } from './BackendAuthorizationHeaderCredentials';
/**
 * @description Details of the Credentials used to connect to Backend.
 */
export interface BackendCredentialsContract {
    /**
     * @description List of Client Certificate Thumbprint.
     */
    certificate: unknown /*= (not tsschema -- undefinedcertificate/undefined ) =*/;
    /**
     * @description Query Parameter description.
     */
    query: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Header Parameter description.
     */
    header: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Authorization header authentication
     */
    authorization: BackendAuthorizationHeaderCredentials;
}
