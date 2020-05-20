
/**
 * ListApplicationsRequest
 */
export interface ListApplicationsRequest {
    /**
     * @description The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.
     */
    MaxResults: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The token to request the next page of results.
     */
    NextToken: string;
}
