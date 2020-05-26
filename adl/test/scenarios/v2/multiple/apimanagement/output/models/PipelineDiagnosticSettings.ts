import { HttpMessageDiagnostic } from './HttpMessageDiagnostic';
/** @since 2019-12-01 */
export interface PipelineDiagnosticSettings {
    /** @since 2019-12-01 */
    request: HttpMessageDiagnostic;
    /** @since 2019-12-01 */
    response: HttpMessageDiagnostic;
}
