
/**
 * ListProblemsRequest
 * @since 2018-11-25
 */
export interface ListProblemsRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.
     * @since 2018-11-25
     */
    StartTime: dateTime;
    /**
     * @description The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.
     * @since 2018-11-25
     */
    EndTime: dateTime;
    /**
     * @description The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     * @since 2018-11-25
     */
    MaxResults: int64 & Minimum<1> & Maximum<40>;
    /**
     * @description The token to request the next page of results.
     * @since 2018-11-25
     */
    NextToken: string;
}
