import { LogPattern } from './LogPattern';
/**
 * @since 2018-11-25
 */
export interface ListLogPatternsResponse {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The list of log patterns.
     * @since 2018-11-25
     */
    LogPatterns: Array<LogPattern>;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     * @since 2018-11-25
     */
    NextToken: string;
}
