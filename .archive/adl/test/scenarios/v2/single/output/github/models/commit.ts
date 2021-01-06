import { user } from "./user";
/**
 *
 * @since v3
 */
export interface commit {
    /**
     *
     * @since v3
     */
    author?: user;
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
    files?: Array<{
        additions?: int64;
        blob_url?: string;
        changes?: int64;
        deletions?: int64;
        filename?: string;
        patch?: string;
        raw_url?: string;
        status?: string;
    }>;
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
    stats?: {
        additions?: int64;
        deletions?: int64;
        total?: int64;
    };
    /**
     *
     * @since v3
     */
    url?: string;
}
