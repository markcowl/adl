
/**
 * ListComponentsRequest
 * @since 2018-11-25
 */
export interface ListComponentsRequest {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
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
