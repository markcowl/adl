
/**
 *
 * @since v3
 */
export interface tree {
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     *
     * @since v3
     */
    tree?: Array<{
        mode?: "100644" | "100755" | "040000" | "160000" | "120000";
        path?: string;
        sha?: string;
        size?: int64;
        type?: "blob" | "tree" | "commit";
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    url?: string;
}
