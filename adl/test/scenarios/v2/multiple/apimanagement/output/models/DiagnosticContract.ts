import { Resource } from './Resource';
import { DiagnosticContractProperties } from './DiagnosticContractProperties';
/**
 * @description Diagnostic details.
 * @since 2019-12-01
 */
export interface DiagnosticContract extends Resource {
    /**
     * @description Diagnostic entity contract properties.
     * @since 2019-12-01
     */
    properties: DiagnosticContractProperties;
}
