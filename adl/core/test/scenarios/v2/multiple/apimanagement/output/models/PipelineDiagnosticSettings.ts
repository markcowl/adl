import { HttpMessageDiagnostic } from './HttpMessageDiagnostic';
/**
 * 
 * @description Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
 */
export interface PipelineDiagnosticSettings {
    /**
     * 
     * @description Diagnostic settings for request.
     */
    request: HttpMessageDiagnostic;
    /**
     * 
     * @description Diagnostic settings for response.
     */
    response: HttpMessageDiagnostic;
}
