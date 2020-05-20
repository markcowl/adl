
/**
 * ListProblemsRequest
 */
export interface ListProblemsRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.
     */
    StartTime: dateTime;
    /**
     * @description The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.
     */
    EndTime: dateTime;
    /**
     * @description The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     */
    MaxResults: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The token to request the next page of results.
     */
    NextToken: string;
}
