import { user } from "./user";
/**
 *
 * @since v3
 */
export interface compare_commits {
    /**
     *
     * @since v3
     */
    ahead_by?: int64;
    /**
     *
     * @since v3
     */
    base_commit?: {
        author?: user;
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
        committer?: user;
        parents?: Array<{
            sha?: string;
            url?: string;
        }>;
        sha?: string;
        url?: string;
    };
    /**
     *
     * @since v3
     */
    behind_by?: int64;
    /**
     *
     * @since v3
     */
    commits?: Array<{
        author?: user;
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
        committer?: user;
        parents?: Array<{
            sha?: string;
            url?: string;
        }>;
        sha?: string;
        url?: string;
    }>;
    /**
     *
     * @since v3
     */
    diff_url?: string;
    /**
     *
     * @since v3
     */
    files?: Array<{
        additions?: int64;
        blob_url?: string;
        changes?: int64;
        contents_url?: string;
        deletions?: int64;
        filename?: string;
        patch?: string;
        raw_url?: string;
        sha?: string;
        status?: string;
    }>;
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    patch_url?: string;
    /**
     *
     * @since v3
     */
    permalink_url?: string;
    /**
     *
     * @since v3
     */
    status?: string;
    /**
     *
     * @since v3
     */
    total_commits?: int64;
    /**
     *
     * @since v3
     */
    url?: string;
}
