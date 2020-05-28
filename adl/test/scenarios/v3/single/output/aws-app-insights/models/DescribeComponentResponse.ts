import { ApplicationComponent } from './ApplicationComponent';
/**
 * @since 2018-11-25
 */
export interface DescribeComponentResponse {
    /**
     * @since 2018-11-25
     */
    ApplicationComponent: ApplicationComponent;
    /**
     * @description The list of resource ARNs that belong to the component.
     * @since 2018-11-25
     */
    ResourceList: Array<string & MaxLength<1011> & MinLength<1>>;
}
