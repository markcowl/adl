import { ApplicationComponent } from './ApplicationComponent';
export interface DescribeComponentResponse {
    ApplicationComponent: ApplicationComponent;
    /**
     * 
     * @description The list of resource ARNs that belong to the component.
     */
    ResourceList: any;
}
