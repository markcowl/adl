
/**
 * @description Quota counter value details.
 */
export interface QuotaCounterValueContractProperties {
    /**
     * @description Number of times Counter was called.
     */
    callsCount: int32;
    /**
     * @description Data Transferred in KiloBytes.
     */
    kbTransferred: double;
}
