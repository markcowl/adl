
/**
 * @since v3
 */
export interface tree {
    /**
     * @since v3
     */
    sha: string;
    /**
     * @since v3
     */
    tree: Array<{
        /** @since v3 */
        mode: "100644" | "100755" | "040000" | "160000" | "120000";
        /**
         * @since v3
         */
        path: string;
        /** @since v3 */
        sha: string;
        /**
         * @since v3
         */
        size: int64;
        /**
         * @since v3
         */
        type: "blob" | "tree" | "commit";
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    url: string;
}
