
/**
 * 
 * @description Gateway hostname configuration details.
 */
export interface GatewayHostnameConfigurationContractProperties {
    /**
     * 
     * @description Hostname value. Supports valid domain name, partial or full wildcard
     */
    hostname: any;
    /**
     * 
     * @description Identifier of Certificate entity that will be used for TLS connection establishment
     */
    certificateId: any;
    /**
     * 
     * @description Determines whether gateway requests client certificate
     */
    negotiateClientCertificate: any;
}
