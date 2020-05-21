import { ApplicationComponent } from './ApplicationComponent';
export interface DescribeComponentResponse {
    ApplicationComponent: ApplicationComponent;
    /**
     * @description The list of resource ARNs that belong to the component.
     */
    ResourceList: Array<string & MaxLength<1011> & MinLength<1>>;
}
