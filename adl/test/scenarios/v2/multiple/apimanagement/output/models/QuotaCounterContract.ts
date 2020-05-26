import { QuotaCounterValueContractProperties } from './QuotaCounterValueContractProperties';
/** @since 2019-12-01 */
export interface QuotaCounterContract {
    /** @since 2019-12-01 */
    counterKey?: string & MinLength<1>;
    /** @since 2019-12-01 */
    periodKey?: string & MinLength<1>;
    /** @since 2019-12-01 */
    periodStartTime?: dateTime;
    /** @since 2019-12-01 */
    periodEndTime?: dateTime;
    /** @since 2019-12-01 */
    value: QuotaCounterValueContractProperties;
}
