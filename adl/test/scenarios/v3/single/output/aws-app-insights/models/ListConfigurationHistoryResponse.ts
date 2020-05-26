import { ConfigurationEvent } from './ConfigurationEvent';
/**
 * @since 2018-11-25
 */
export interface ListConfigurationHistoryResponse {
    /** @since 2018-11-25 */
    EventList: Array<ConfigurationEvent>;
    /** @since 2018-11-25 */
    NextToken: string;
}
