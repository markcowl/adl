import { Tag } from './Tag';
/**
 * TagResourceRequest
 * @since 2018-11-25
 */
export interface TagResourceRequest {
    /** @since 2018-11-25 */
    ResourceARN?: string & MaxLength<1011> & MinLength<1>;
    /** @since 2018-11-25 */
    Tags?: Array<Tag> & MaximumElements<200> & MinimumElements<0>;
}
