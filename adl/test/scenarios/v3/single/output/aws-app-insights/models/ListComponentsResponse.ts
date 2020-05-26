import { ApplicationComponent } from './ApplicationComponent';
/**
 * @since 2018-11-25
 */
export interface ListComponentsResponse {
    /** @since 2018-11-25 */
    ApplicationComponentList: Array<ApplicationComponent>;
    /** @since 2018-11-25 */
    NextToken: string;
}
