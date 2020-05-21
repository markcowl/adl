import { BodyDiagnosticSettings } from './BodyDiagnosticSettings';
/**
 * @description Http message diagnostic settings.
 */
export interface HttpMessageDiagnostic {
    /**
     * @description Array of HTTP Headers to log.
     */
    headers: Array<string>;
    /**
     * @description Body logging settings.
     */
    body: BodyDiagnosticSettings;
}
