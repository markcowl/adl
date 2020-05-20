export interface ListLogPatternSetsResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The list of log pattern sets.
     */
    LogPatternSets: unknown /*= (not tsschema -- undefinedLogPatternSetList/undefined ) =*/;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
