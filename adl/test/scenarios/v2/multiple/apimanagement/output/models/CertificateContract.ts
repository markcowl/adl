import { Resource } from './Resource';
import { CertificateContractProperties } from './CertificateContractProperties';
/**
 * @description Certificate details.
 */
export interface CertificateContract extends Resource {
    /**
     * @description Certificate properties details.
     */
    properties: CertificateContractProperties;
}
