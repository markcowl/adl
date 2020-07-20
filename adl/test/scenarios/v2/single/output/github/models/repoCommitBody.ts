
/**
 *
 * @since v3
 */
export interface repoCommitBody {
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
    message: string;
    /**
     *
     * @since v3
     */
    parents: Array<string>;
    /**
     *
     * @since v3
     */
    tree: string;
}
