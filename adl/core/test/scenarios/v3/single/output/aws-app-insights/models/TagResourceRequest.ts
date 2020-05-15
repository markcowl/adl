
/** TagResourceRequest */
export interface TagResourceRequest {
    /**
     * 
     * @description The Amazon Resource Name (ARN) of the application that you want to add one or more tags to.
     */
    ResourceARN?: any;
    /**
     * 
     * @description A list of tags that to add to the application. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    Tags?: any;
}
