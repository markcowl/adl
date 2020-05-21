
/**
 * ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
    /**
     * @description The Amazon Resource Name (ARN) of the application that you want to retrieve tag information for.
     */
    ResourceARN?: string & MaxLength<1011> & MinLength<1>;
}