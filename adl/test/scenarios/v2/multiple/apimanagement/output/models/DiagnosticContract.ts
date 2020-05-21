import { Resource } from './Resource';
import { DiagnosticContractProperties } from './DiagnosticContractProperties';
/**
 * @description Diagnostic details.
 */
export interface DiagnosticContract extends Resource {
    /**
     * @description Diagnostic entity contract properties.
     */
    properties: DiagnosticContractProperties;
}
