export interface tagBody {
    /**
     * @description String of the tag message.
     */
    message?: any;
    /**
     * @description String of the SHA of the git object this is tagging.
     */
    object?: any;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag?: any;
    tagger?: {
        /**
         * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        /**
         * @description String of the email of the author of the tag.
         */
        email: any;
        /**
         * @description String of the name of the author of the tag.
         */
        name: any;
    };
    /**
     * @description String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
     */
    type?: any;
}
