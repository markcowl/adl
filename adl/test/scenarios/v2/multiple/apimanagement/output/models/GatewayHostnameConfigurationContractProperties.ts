
/**
 * @description Gateway hostname configuration details.
 */
export interface GatewayHostnameConfigurationContractProperties {
    /**
     * @description Hostname value. Supports valid domain name, partial or full wildcard
     */
    hostname: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Identifier of Certificate entity that will be used for TLS connection establishment
     */
    certificateId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Determines whether gateway requests client certificate
     */
    negotiateClientCertificate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
