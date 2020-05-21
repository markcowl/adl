import { X509CertificateName } from './X509CertificateName';
/**
 * @description Properties of the Service Fabric Type Backend.
 */
export interface BackendServiceFabricClusterProperties {
    /**
     * @description The client certificate thumbprint for the management endpoint.
     */
    clientCertificatethumbprint?: string;
    /**
     * @description Maximum number of retries while attempting resolve the partition.
     */
    maxPartitionResolutionRetries: int32;
    /**
     * @description The cluster management endpoint.
     */
    managementEndpoints?: Array<string>;
    /**
     * @description Thumbprints of certificates cluster management service uses for tls communication
     */
    serverCertificateThumbprints: Array<string>;
    /**
     * @description Server X509 Certificate Names Collection
     */
    serverX509Names: Array<X509CertificateName>;
}
