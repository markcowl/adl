
/**
 * UntagResourceRequest
 * @since 2018-11-25
 */
export interface UntagResourceRequest {
    /**
     * @description The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.
     * @since 2018-11-25
     */
    ResourceARN?: string & MaxLength<1011> & MinLength<1>;
    /**
     * @description <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the application, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. </p>
     * @since 2018-11-25
     */
    TagKeys?: Array<string & MaxLength<128> & MinLength<1>> & MaximumElements<200> & MinimumElements<0>;
}
