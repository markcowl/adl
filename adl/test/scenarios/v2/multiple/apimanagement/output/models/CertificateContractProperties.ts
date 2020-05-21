
/**
 * @description Properties of the Certificate contract.
 */
export interface CertificateContractProperties {
    /**
     * @description Subject attribute of the certificate.
     */
    subject?: string;
    /**
     * @description Thumbprint of the certificate.
     */
    thumbprint?: string;
    /**
     * @description Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    expirationDate?: dateTime;
}
