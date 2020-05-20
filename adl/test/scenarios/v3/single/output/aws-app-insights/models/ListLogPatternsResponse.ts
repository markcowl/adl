export interface ListLogPatternsResponse {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The list of log patterns.
     */
    LogPatterns: unknown /*= (not tsschema -- undefinedLogPatternList/undefined ) =*/;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
