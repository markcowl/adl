import { SamplingSettings } from './SamplingSettings';
import { PipelineDiagnosticSettings } from './PipelineDiagnosticSettings';
/** @since 2019-12-01 */
export interface DiagnosticContractProperties {
    /** @since 2019-12-01 */
    alwaysLog: AlwaysLog;
    /** @since 2019-12-01 */
    loggerId?: string;
    /** @since 2019-12-01 */
    sampling: SamplingSettings;
    /** @since 2019-12-01 */
    frontend: PipelineDiagnosticSettings;
    /** @since 2019-12-01 */
    backend: PipelineDiagnosticSettings;
    /** @since 2019-12-01 */
    logClientIp: boolean;
    /** @since 2019-12-01 */
    httpCorrelationProtocol: HttpCorrelationProtocol;
    /** @since 2019-12-01 */
    verbosity: Verbosity;
}
