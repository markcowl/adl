import { RequestReportRecordContract } from './RequestReportRecordContract';
/**
 * @description Paged Report records list representation.
 */
export interface RequestReportCollection {
    /**
     * @description Page values.
     */
    value: Array<RequestReportRecordContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
}
