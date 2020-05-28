
/**
 * @since 2018-11-25
 */
export interface ListLogPatternSetsResponse {
    /**
     * @description The name of the resource group.
     * @since 2018-11-25
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The list of log pattern sets.
     * @since 2018-11-25
     */
    LogPatternSets: Array<string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">>;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     * @since 2018-11-25
     */
    NextToken: string;
}
