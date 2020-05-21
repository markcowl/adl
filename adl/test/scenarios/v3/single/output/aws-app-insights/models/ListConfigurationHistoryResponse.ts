import { ConfigurationEvent } from './ConfigurationEvent';
export interface ListConfigurationHistoryResponse {
    /**
     * @description  The list of configuration events and their corresponding details.
     */
    EventList: Array<ConfigurationEvent>;
    /**
     * @description The <code>NextToken</code> value to include in a future <code>ListConfigurationHistory</code> request. When the results of a <code>ListConfigurationHistory</code> request exceed <code>MaxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
