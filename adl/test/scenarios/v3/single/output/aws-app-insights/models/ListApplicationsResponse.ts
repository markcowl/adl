import { ApplicationInfo } from './ApplicationInfo';
/**
 * @since 2018-11-25
 */
export interface ListApplicationsResponse {
    /** @since 2018-11-25 */
    ApplicationInfoList: Array<ApplicationInfo>;
    /** @since 2018-11-25 */
    NextToken: string;
}
