import { BodyDiagnosticSettings } from './BodyDiagnosticSettings';
/**
 * @description Http message diagnostic settings.
 */
export interface HttpMessageDiagnostic {
    /**
     * @description Array of HTTP Headers to log.
     */
    headers: unknown /*= (not tsschema -- undefinedheaders/undefined ) =*/;
    /**
     * @description Body logging settings.
     */
    body: BodyDiagnosticSettings;
}
