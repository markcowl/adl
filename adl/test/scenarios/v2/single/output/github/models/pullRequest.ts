import { repo } from "./repo";
/**
 *
 * @since v3
 */
export interface pullRequest {
    /**
     *
     * @since v3
     */
    _links?: {
        comments?: {
            href?: string;
        };
        html?: {
            href?: string;
        };
        review_comments?: {
            href?: string;
        };
        self?: {
            href?: string;
        };
    };
    /**
     *
     * @since v3
     */
    additions?: int64;
    /**
     *
     * @since v3
     */
    base?: {
        label?: string;
        ref?: string;
        repo?: repo;
        sha?: string;
        user?: {
            avatar_url?: string;
            gravatar_id?: string;
            id?: int64;
            login?: string;
            url?: string;
        };
    };
    /**
     *
     * @since v3
     */
    body?: string;
    /**
     *
     * @since v3
     */
    changed_files?: int64;
    /**
     *
     * @since v3
     */
    closed_at?: string;
    /**
     *
     * @since v3
     */
    comments?: int64;
    /**
     *
     * @since v3
     */
    commits?: int64;
    /**
     *
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    deletions?: int64;
    /**
     *
     * @since v3
     */
    diff_url?: string;
    /**
     *
     * @since v3
     */
    head?: {
        label?: string;
        ref?: string;
        repo?: repo;
        sha?: string;
        user?: {
            avatar_url?: string;
            gravatar_id?: string;
            id?: int64;
            login?: string;
            url?: string;
        };
    };
    /**
     *
     * @since v3
     */
    html_url?: string;
    /**
     *
     * @since v3
     */
    issue_url?: string;
    /**
     *
     * @since v3
     */
    merge_commit_sha?: string;
    /**
     *
     * @since v3
     */
    mergeable?: boolean;
    /**
     *
     * @since v3
     */
    merged?: boolean;
    /**
     *
     * @since v3
     */
    merged_at?: string;
    /**
     *
     * @since v3
     */
    merged_by?: {
        avatar_url?: string;
        gravatar_id?: string;
        id?: int64;
        login?: string;
        url?: string;
    };
    /**
     *
     * @since v3
     */
    number?: int64;
    /**
     *
     * @since v3
     */
    patch_url?: string;
    /**
     *
     * @since v3
     */
    state?: string;
    /**
     *
     * @since v3
     */
    title?: string;
    /**
     *
     * @since v3
     */
    updated_at?: string;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    user?: {
        avatar_url?: string;
        gravatar_id?: string;
        id?: int64;
        login?: string;
        url?: string;
    };
}
