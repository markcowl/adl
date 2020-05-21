import { DiagnosticContract } from './DiagnosticContract';
/**
 * @description Paged Diagnostic list representation.
 */
export interface DiagnosticCollection {
    /**
     * @description Page values.
     */
    value: Array<DiagnosticContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
