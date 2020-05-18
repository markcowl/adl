
/** ListConfigurationHistoryRequest */
export interface ListConfigurationHistoryRequest {
    /**
     * @description Resource group to which the application belongs.
     */
    ResourceGroupName: any;
    /**
     * @description The start time of the event.
     */
    StartTime: any;
    /**
     * @description The end time of the event.
     */
    EndTime: any;
    /**
     * @description The status of the configuration update event. Possible values include INFO, WARN, and ERROR.
     */
    EventStatus: ConfigurationEventStatus;
    /**
     * @description  The maximum number of results returned by <code>ListConfigurationHistory</code> in paginated output. When this parameter is used, <code>ListConfigurationHistory</code> returns only <code>MaxResults</code> in a single page along with a <code>NextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListConfigurationHistory</code> request with the returned <code>NextToken</code> value. If this parameter is not used, then <code>ListConfigurationHistory</code> returns all results.
     */
    MaxResults: any;
    /**
     * @description The <code>NextToken</code> value returned from a previous paginated <code>ListConfigurationHistory</code> request where <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>NextToken</code> value. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: any;
}
