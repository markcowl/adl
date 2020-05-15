
/** ListProblemsRequest */
export interface ListProblemsRequest {
    /**
     * 
     * @description The name of the resource group.
     */
    ResourceGroupName: any;
    /**
     * 
     * @description The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.
     */
    StartTime: any;
    /**
     * 
     * @description The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.
     */
    EndTime: any;
    /**
     * 
     * @description The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     */
    MaxResults: any;
    /**
     * 
     * @description The token to request the next page of results.
     */
    NextToken: any;
}
