
/**
 * ListLogPatternsRequest
 */
export interface ListLogPatternsRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: any;
    /**
     * @description The name of the log pattern set.
     */
    PatternSetName: any;
    /**
     * @description The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     */
    MaxResults: any;
    /**
     * @description The token to request the next page of results.
     */
    NextToken: any;
}
