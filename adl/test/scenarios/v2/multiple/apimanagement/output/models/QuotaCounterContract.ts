import { QuotaCounterValueContractProperties } from './QuotaCounterValueContractProperties';
/**
 * @description Quota counter details.
 */
export interface QuotaCounterContract {
    /**
     * @description The Key value of the Counter. Must not be empty.
     */
    counterKey?: any;
    /**
     * @description Identifier of the Period for which the counter was collected. Must not be empty.
     */
    periodKey?: any;
    /**
     * @description The date of the start of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    periodStartTime?: any;
    /**
     * @description The date of the end of Counter Period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    periodEndTime?: any;
    /**
     * @description Quota Value Properties
     */
    value: QuotaCounterValueContractProperties;
}
