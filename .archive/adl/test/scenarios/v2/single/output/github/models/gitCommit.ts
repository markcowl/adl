
/**
 *
 * @since v3
 */
export interface gitCommit {
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
    message?: string;
    /**
     *
     * @since v3
     */
    parents?: string;
    /**
     *
     * @since v3
     */
    tree?: string;
}
