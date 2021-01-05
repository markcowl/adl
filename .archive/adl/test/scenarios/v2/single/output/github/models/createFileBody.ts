
/**
 *
 * @since v3
 */
export interface createFileBody {
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
    content?: string;
    /**
     *
     * @since v3
     */
    message?: string;
}
