import { ApplicationComponent } from './ApplicationComponent';
export interface ListComponentsResponse {
    /**
     * @description The list of application components.
     */
    ApplicationComponentList: Array<ApplicationComponent>;
    /**
     * @description The token to request the next page of results.
     */
    NextToken: string;
}
