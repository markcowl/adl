import { Resource } from './Resource';
/**
 * @description List of vault resources.
 */
export interface ResourceListResult {
    /**
     * @description The list of vault resources.
     */
    value: Array<Resource>;
    /**
     * @description The URL to get the next set of vault resources.
     */
    nextLink: string;
}
