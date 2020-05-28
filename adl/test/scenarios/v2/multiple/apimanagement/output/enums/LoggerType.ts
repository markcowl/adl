
/**
 * @extensible
 * @description Logger type.
 * @todo temporary-reuse-marker
 * @since 2019-12-01
 */
export enum LoggerType {
    /** Azure Event Hub as log destination. */
    azureEventHub = 'azureEventHub',
    /** Azure Application Insights as log destination. */
    applicationInsights = 'applicationInsights'
}
