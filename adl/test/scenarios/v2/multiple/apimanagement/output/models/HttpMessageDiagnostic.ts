import { BodyDiagnosticSettings } from './BodyDiagnosticSettings';
/**
 * @description Http message diagnostic settings.
 */
export interface HttpMessageDiagnostic {
    /**
     * @description Array of HTTP Headers to log.
     */
    headers: any;
    /**
     * @description Body logging settings.
     */
    body: BodyDiagnosticSettings;
}
