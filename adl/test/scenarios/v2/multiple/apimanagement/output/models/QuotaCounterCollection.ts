import { QuotaCounterContract } from './QuotaCounterContract';
/**
 * @description Paged Quota Counter list representation.
 */
export interface QuotaCounterCollection {
    /**
     * @description Quota counter values.
     */
    value: Array<QuotaCounterContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
