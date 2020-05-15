
/** UntagResourceRequest */
export interface UntagResourceRequest {
    /**
     * 
     * @description The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.
     */
    ResourceARN?: any;
    /**
     * 
     * @description <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the application, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. </p>
     */
    TagKeys?: any;
}
