export interface tag {
    /**
     * @description String of the tag message.
     */
    message: string;
    object: {
        sha: string;
        /**
         * @description String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
         */
        type: enum_292;
        url: string;
    };
    sha: string;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag: string;
    tagger: {
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
    url: string;
}
