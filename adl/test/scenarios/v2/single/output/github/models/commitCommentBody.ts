
/**
 * @since v3
 */
export interface commitCommentBody {
    /**
     * @since v3
     */
    body?: string;
    /** @since v3 */
    line: string;
    /** @since v3 */
    number: string;
    /** @since v3 */
    path: string;
    /** @since v3 */
    position: int64;
    /** @since v3 */
    sha?: string;
}
