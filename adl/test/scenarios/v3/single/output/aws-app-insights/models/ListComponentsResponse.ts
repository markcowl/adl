import { ApplicationComponent } from './ApplicationComponent';
/**
 * @since 2018-11-25
 */
export interface ListComponentsResponse {
    /**
     * @description The list of application components.
     * @since 2018-11-25
     */
    ApplicationComponentList: Array<ApplicationComponent>;
    /**
     * @description The token to request the next page of results.
     * @since 2018-11-25
     */
    NextToken: string;
}
