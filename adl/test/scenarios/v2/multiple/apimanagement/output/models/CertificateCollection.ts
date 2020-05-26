import { CertificateContract } from './CertificateContract';
/** @since 2019-12-01 */
export interface CertificateCollection {
    /** @since 2019-12-01 */
    value: Array<CertificateContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}
