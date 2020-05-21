export interface ListLogPatternSetsResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The list of log pattern sets.
     */
    LogPatternSets: Array<string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">>;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
