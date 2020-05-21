import { ApplicationInfo } from './ApplicationInfo';
export interface ListApplicationsResponse {
    /**
     * @description The list of applications.
     */
    ApplicationInfoList: Array<ApplicationInfo>;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
