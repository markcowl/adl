
/**
 *
 * @since v3
 */
export interface tag {
    /**
     * @description String of the tag message.
     * @since v3
     */
    message?: string;
    /**
     *
     * @since v3
     */
    object?: {
        sha?: string;
        type?: "commit" | "tree" | "blob";
        url?: string;
    };
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     * @description The tag's name. This is typically a version (e.g., "v0.0.1").
     * @since v3
     */
    tag?: string;
    /**
     *
     * @since v3
     */
    tagger?: {
        date?: string;
        email?: string;
        name?: string;
    };
    /**
     *
     * @since v3
     */
    url?: string;
}
