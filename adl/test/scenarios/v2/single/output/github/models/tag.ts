export interface tag {
    /**
     * @description String of the tag message.
     */
    message: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    object: {
        sha: string;
        /**
         * @description String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
         */
        type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        url: string;
    };
    sha: string;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     */
    tag: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    tagger: {
        /**
         * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description String of the email of the author of the tag.
         */
        email: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description String of the name of the author of the tag.
         */
        name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    };
    url: string;
}
