export interface tagBody {
    /**
     * @description String of the tag message.
     */
    message?: string;
    /**
     * @description String of the SHA of the git object this is tagging.
     */
    object?: string;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag?: string;
    tagger?: {
        /**
         * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: string;
        /**
         * @description String of the email of the author of the tag.
         */
        email: string;
        /**
         * @description String of the name of the author of the tag.
         */
        name: string;
    };
    /**
     * @description String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
     */
    type?: enum_305;
}
