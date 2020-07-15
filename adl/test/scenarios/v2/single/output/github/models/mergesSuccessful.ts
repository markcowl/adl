import { user } from "./user";
/**
 *
 * @since v3
 */
export interface mergesSuccessful {
    /**
     *
     * @since v3
     */
    author?: user;
    /**
     *
     * @since v3
     */
    comments_url?: string;
    /**
     *
     * @since v3
     */
    commit?: {
        author?: {
            date?: string;
            email?: string;
            name?: string;
        };
        comment_count?: int64;
        committer?: {
            date?: string;
            email?: string;
            name?: string;
        };
        message?: string;
        tree?: {
            sha?: string;
            url?: string;
        };
        url?: string;
    };
    /**
     *
     * @since v3
     */
    committer?: user;
    /**
     *
     * @since v3
     */
    merged?: boolean;
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
    url?: string;
}
