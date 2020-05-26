import { Resource } from './Resource';
import { CertificateContractProperties } from './CertificateContractProperties';
/** @since 2019-12-01 */
export interface CertificateContract extends Resource {
    /** @since 2019-12-01 */
    properties: CertificateContractProperties;
}
