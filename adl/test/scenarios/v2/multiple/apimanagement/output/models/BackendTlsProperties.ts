
/**
 * @description Properties controlling TLS Certificate Validation.
 */
export interface BackendTlsProperties {
    /**
     * @description Flag indicating whether SSL certificate chain validation should be done when using self-signed certificates for this backend host.
     */
    validateCertificateChain: any;
    /**
     * @description Flag indicating whether SSL certificate name validation should be done when using self-signed certificates for this backend host.
     */
    validateCertificateName: any;
}
