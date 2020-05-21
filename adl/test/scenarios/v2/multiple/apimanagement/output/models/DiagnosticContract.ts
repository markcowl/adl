import { DiagnosticContractProperties } from './DiagnosticContractProperties';
import { Resource } from './Resource';
/**
 * @description Diagnostic details.
 */
export interface DiagnosticContract extends Resource {
    /**
     * @description Diagnostic entity contract properties.
     */
    properties: DiagnosticContractProperties;
}
