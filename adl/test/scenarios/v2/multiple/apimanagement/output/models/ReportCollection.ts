import { ReportRecordContract } from './ReportRecordContract';
/**
 * @description Paged Report records list representation.
 */
export interface ReportCollection {
    /**
     * @description Page values.
     */
    value: Array<ReportRecordContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
