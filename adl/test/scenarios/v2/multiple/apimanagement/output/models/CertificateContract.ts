import { CertificateContractProperties } from './CertificateContractProperties';
import { Resource } from './Resource';
/**
 * @description Certificate details.
 */
export interface CertificateContract extends Resource {
    /**
     * @description Certificate properties details.
     */
    properties: CertificateContractProperties;
}
