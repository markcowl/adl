import { LogPattern } from './LogPattern';
export interface ListLogPatternsResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The list of log patterns.
     */
    LogPatterns: Array<LogPattern>;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
