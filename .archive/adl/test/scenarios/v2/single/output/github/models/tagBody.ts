
/**
 *
 * @since v3
 */
export interface tagBody {
    /**
     * @description String of the tag message.
     * @since v3
     */
    message: string;
    /**
     * @description String of the SHA of the git object this is tagging.
     * @since v3
     */
    object: string;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     * @since v3
     */
    tag: string;
    /**
     *
     * @since v3
     */
    tagger: {
        date?: string;
        email?: string;
        name?: string;
    };
    /**
     * @description String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
     * @since v3
     */
    type: "commit" | "tree" | "blob";
}
