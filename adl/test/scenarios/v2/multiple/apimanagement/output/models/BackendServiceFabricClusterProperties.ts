
/**
 * @description Properties of the Service Fabric Type Backend.
 */
export interface BackendServiceFabricClusterProperties {
    /**
     * @description The client certificate thumbprint for the management endpoint.
     */
    clientCertificatethumbprint?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Maximum number of retries while attempting resolve the partition.
     */
    maxPartitionResolutionRetries: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The cluster management endpoint.
     */
    managementEndpoints?: unknown /*= (not tsschema -- undefinedmanagementEndpoints/undefined ) =*/;
    /**
     * @description Thumbprints of certificates cluster management service uses for tls communication
     */
    serverCertificateThumbprints: unknown /*= (not tsschema -- undefinedserverCertificateThumbprints/undefined ) =*/;
    /**
     * @description Server X509 Certificate Names Collection
     */
    serverX509Names: unknown /*= (not tsschema -- undefinedserverX509Names/undefined ) =*/;
}
