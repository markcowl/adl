import { LogPattern } from './LogPattern';
/**
 * @since 2018-11-25
 */
export interface ListLogPatternsResponse {
    /** @since 2018-11-25 */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    LogPatterns: Array<LogPattern>;
    /** @since 2018-11-25 */
    NextToken: string;
}
