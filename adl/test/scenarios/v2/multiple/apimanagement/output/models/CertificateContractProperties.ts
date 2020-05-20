
/**
 * @description Properties of the Certificate contract.
 */
export interface CertificateContractProperties {
    /**
     * @description Subject attribute of the certificate.
     */
    subject?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Thumbprint of the certificate.
     */
    thumbprint?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    expirationDate?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
