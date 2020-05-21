import { Tag } from './Tag';
export interface ListTagsForResourceResponse {
    /**
     * @description An array that lists all the tags that are associated with the application. Each tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>).
     */
    Tags: Array<Tag> & MaximumElements<200> & MinimumElements<0>;
}
