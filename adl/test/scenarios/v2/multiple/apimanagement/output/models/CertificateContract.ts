import { Resource } from './Resource';
import { CertificateContractProperties } from './CertificateContractProperties';
/**
 * @description Certificate details.
 * @since 2019-12-01
 */
export interface CertificateContract extends Resource {
    /**
     * @description Certificate properties details.
     * @since 2019-12-01
     */
    properties: CertificateContractProperties;
}
