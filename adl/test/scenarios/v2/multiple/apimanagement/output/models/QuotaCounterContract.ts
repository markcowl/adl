import { QuotaCounterValueContractProperties } from './QuotaCounterValueContractProperties';
/**
 * @description Quota counter details.
 */
export interface QuotaCounterContract {
    /**
     * @description The Key value of the Counter. Must not be empty.
     */
    counterKey?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Identifier of the Period for which the counter was collected. Must not be empty.
     */
    periodKey?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The date of the start of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    periodStartTime?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The date of the end of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    periodEndTime?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Quota Value Properties
     */
    value: QuotaCounterValueContractProperties;
}
