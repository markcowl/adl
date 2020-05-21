import { LoggerContract } from './LoggerContract';
/**
 * @description Paged Logger list representation.
 */
export interface LoggerCollection {
    /**
     * @description Logger values.
     */
    value: Array<LoggerContract>;
    /**
     * @description Total record count number across all pages.
     */
    count: int64;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
