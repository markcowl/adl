
/**
 *
 * @since v3
 */
export interface repoCommit {
    /**
     *
     * @since v3
     */
    author?: {
        date?: string;
        email?: string;
        name?: string;
    };
    /**
     *
     * @since v3
     */
    committer?: {
        date?: string;
        email?: string;
        name?: string;
    };
    /**
     *
     * @since v3
     */
    message?: string;
    /**
     *
     * @since v3
     */
    parents?: Array<{
        sha?: string;
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    sha?: string;
    /**
     *
     * @since v3
     */
    tree?: {
        sha?: string;
        url?: string;
    };
    /**
     *
     * @since v3
     */
    url?: string;
}
