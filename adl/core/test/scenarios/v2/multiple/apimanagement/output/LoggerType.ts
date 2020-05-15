
/**
 * 
 * @description Logger type.
 * @extensible
 @todo-temporary-reuse-marker */
export enum LoggerType {
    /** Azure Event Hub as log destination. */
    azureEventHub = 'azureEventHub',
    /** Azure Application Insights as log destination. */
    applicationInsights = 'applicationInsights'
}
