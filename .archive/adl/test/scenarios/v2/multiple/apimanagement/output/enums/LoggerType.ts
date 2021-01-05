
/**
 * @extensible
 * @description Logger type.
 * @since 2019-12-01
 */
export enum LoggerType {
    /** Azure Event Hub as log destination. */
    azureEventHub = "azureEventHub",
    /** Azure Application Insights as log destination. */
    applicationInsights = "applicationInsights"
}
