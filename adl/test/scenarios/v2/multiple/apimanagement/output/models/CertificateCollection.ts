import { CertificateContract } from './CertificateContract';
/**
 * @description Paged Certificates list representation.
 */
export interface CertificateCollection {
    /**
     * @description Page values.
     */
    value: Array<CertificateContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
