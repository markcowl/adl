import { LoggerType } from '../enums/LoggerType';
/**
 * @description The Logger entity in API Management represents an event sink that you can use to log API Management events. Currently the Logger entity supports logging API Management events to Azure Event Hubs.
 */
export interface LoggerContractProperties {
    /**
     * @description Logger type.
     */
    loggerType?: LoggerType;
    /**
     * @description Logger description.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The name and SendRule connection string of the event hub for azureEventHub logger.
     * Instrumentation key for applicationInsights logger.
     */
    credentials?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    isBuffered: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
     */
    resourceId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
