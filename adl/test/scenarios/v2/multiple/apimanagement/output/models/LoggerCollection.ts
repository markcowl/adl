import { LoggerContract } from './LoggerContract';
/** @since 2019-12-01 */
export interface LoggerCollection {
    /** @since 2019-12-01 */
    value: Array<LoggerContract>;
    /** @since 2019-12-01 */
    count: int64;
    /** @since 2019-12-01 */
    nextLink: string;
}
