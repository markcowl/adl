
/**
 * @since v3
 */
export interface tag {
    /** @since v3 */
    message: string;
    /**
     * @since v3
     */
    object: {
        /**
         * @since v3
         */
        sha: string;
        /** @since v3 */
        type: "commit" | "tree" | "blob";
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    sha: string;
    /** @since v3 */
    tag: string;
    /**
     * @since v3
     */
    tagger: {
        /** @since v3 */
        date: string;
        /** @since v3 */
        email: string;
        /** @since v3 */
        name: string;
    };
    /**
     * @since v3
     */
    url: string;
}
