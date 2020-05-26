import { ReportRecordContract } from './ReportRecordContract';
/** @since 2019-12-01 */
export interface ReportCollection {
    /** @since 2019-12-01 */
    value: Array<ReportRecordContract>;
    /** @since 2019-12-01 */
    count: int64;
    /** @since 2019-12-01 */
    nextLink: string;
}
