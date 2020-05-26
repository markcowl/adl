import { BodyDiagnosticSettings } from './BodyDiagnosticSettings';
/** @since 2019-12-01 */
export interface HttpMessageDiagnostic {
    /** @since 2019-12-01 */
    headers: Array<string>;
    /** @since 2019-12-01 */
    body: BodyDiagnosticSettings;
}
