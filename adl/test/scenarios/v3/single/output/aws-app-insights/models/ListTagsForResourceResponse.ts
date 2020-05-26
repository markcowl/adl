import { Tag } from './Tag';
/**
 * @since 2018-11-25
 */
export interface ListTagsForResourceResponse {
    /** @since 2018-11-25 */
    Tags: Array<Tag> & MaximumElements<200> & MinimumElements<0>;
}
