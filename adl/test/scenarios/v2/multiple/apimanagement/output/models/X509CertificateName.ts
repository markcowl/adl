
/**
 * @description Properties of server X509Names.
 */
export interface X509CertificateName {
    /**
     * @description Common Name of the Certificate.
     */
    name: string;
    /**
     * @description Thumbprint for the Issuer of the Certificate.
     */
    issuerCertificateThumbprint: string;
}
