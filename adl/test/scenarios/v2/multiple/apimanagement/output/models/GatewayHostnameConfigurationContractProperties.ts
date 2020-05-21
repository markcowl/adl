
/**
 * @description Gateway hostname configuration details.
 */
export interface GatewayHostnameConfigurationContractProperties {
    /**
     * @description Hostname value. Supports valid domain name, partial or full wildcard
     */
    hostname: string;
    /**
     * @description Identifier of Certificate entity that will be used for TLS connection establishment
     */
    certificateId: string;
    /**
     * @description Determines whether gateway requests client certificate
     */
    negotiateClientCertificate: boolean;
}
