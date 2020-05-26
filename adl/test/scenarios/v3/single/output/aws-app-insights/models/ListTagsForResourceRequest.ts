
/**
 * ListTagsForResourceRequest
 * @since 2018-11-25
 */
export interface ListTagsForResourceRequest {
    /** @since 2018-11-25 */
    ResourceARN?: string & MaxLength<1011> & MinLength<1>;
}
