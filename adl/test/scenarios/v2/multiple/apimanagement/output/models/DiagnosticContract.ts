import { Resource } from './Resource';
import { DiagnosticContractProperties } from './DiagnosticContractProperties';
/** @since 2019-12-01 */
export interface DiagnosticContract extends Resource {
    /** @since 2019-12-01 */
    properties: DiagnosticContractProperties;
}
