
/**
 * @description Properties of the Service Fabric Type Backend.
 */
export interface BackendServiceFabricClusterProperties {
    /**
     * @description The client certificate thumbprint for the management endpoint.
     */
    clientCertificatethumbprint?: any;
    /**
     * @description Maximum number of retries while attempting resolve the partition.
     */
    maxPartitionResolutionRetries: any;
    /**
     * @description The cluster management endpoint.
     */
    managementEndpoints?: any;
    /**
     * @description Thumbprints of certificates cluster management service uses for tls communication
     */
    serverCertificateThumbprints: any;
    /**
     * @description Server X509 Certificate Names Collection
     */
    serverX509Names: any;
}
