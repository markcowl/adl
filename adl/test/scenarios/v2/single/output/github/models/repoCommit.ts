
/**
 * @since v3
 */
export interface repoCommit {
    /**
     * @since v3
     */
    author: {
        /** @since v3 */
        date: string;
        /**
         * @since v3
         */
        email: string;
        /**
         * @since v3
         */
        name: string;
    };
    /**
     * @since v3
     */
    committer: {
        /** @since v3 */
        date: string;
        /**
         * @since v3
         */
        email: string;
        /**
         * @since v3
         */
        name: string;
    };
    /**
     * @since v3
     */
    message: string;
    /**
     * @since v3
     */
    parents: Array<{
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    sha: string;
    /**
     * @since v3
     */
    tree: {
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    url: string;
}
