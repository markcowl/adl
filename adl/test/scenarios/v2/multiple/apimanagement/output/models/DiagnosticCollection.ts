import { DiagnosticContract } from './DiagnosticContract';
/** @since 2019-12-01 */
export interface DiagnosticCollection {
    /** @since 2019-12-01 */
    value: Array<DiagnosticContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}
