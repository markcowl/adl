
/**
 *
 * @since v3
 */
export interface deleteFileBody {
    /**
     *
     * @since v3
     */
    committer?: {
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
    sha?: string;
}
