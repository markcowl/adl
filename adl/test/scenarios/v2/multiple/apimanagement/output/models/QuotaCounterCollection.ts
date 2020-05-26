import { QuotaCounterContract } from './QuotaCounterContract';
/** @since 2019-12-01 */
export interface QuotaCounterCollection {
    /** @since 2019-12-01 */
    value: Array<QuotaCounterContract>;
    /** @since 2019-12-01 */
    count: int64;
    /** @since 2019-12-01 */
    nextLink: string;
}
