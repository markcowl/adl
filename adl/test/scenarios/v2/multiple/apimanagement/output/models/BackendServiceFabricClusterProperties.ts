import { X509CertificateName } from './X509CertificateName';
/** @since 2019-12-01 */
export interface BackendServiceFabricClusterProperties {
    /** @since 2019-12-01 */
    clientCertificatethumbprint?: string;
    /** @since 2019-12-01 */
    maxPartitionResolutionRetries: int32;
    /** @since 2019-12-01 */
    managementEndpoints?: Array<string>;
    /** @since 2019-12-01 */
    serverCertificateThumbprints: Array<string>;
    /** @since 2019-12-01 */
    serverX509Names: Array<X509CertificateName>;
}
