
/**
 * UntagResourceRequest
 * @since 2018-11-25
 */
export interface UntagResourceRequest {
    /** @since 2018-11-25 */
    ResourceARN?: string & MaxLength<1011> & MinLength<1>;
    /** @since 2018-11-25 */
    TagKeys?: Array<string & MaxLength<128> & MinLength<1>> & MaximumElements<200> & MinimumElements<0>;
}
