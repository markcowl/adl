import { user } from "./user";
/**
 *
 * @since v3
 */
export interface gist {
    /**
     *
     * @since v3
     */
    comments?: int64;
    /**
     *
     * @since v3
     */
    comments_url?: string;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    description?: string;
    /**
     *
     * @since v3
     */
    files?: {
        "ring.erl"?: {
            filename?: string;
            raw_url?: string;
            size?: int64;
        };
    };
    /**
     *
     * @since v3
     */
    forks?: Array<{
        created_at?: string;
        url?: string;
        user?: user;
    }>;
    /**
     *
     * @since v3
     */
    git_pull_url?: string;
    /**
     *
     * @since v3
     */
    git_push_url?: string;
    /**
     *
     * @since v3
     */
    history?: Array<{
        change_status?: {
            additions?: int64;
            deletions?: int64;
            total?: int64;
        };
        committed_at?: string;
        url?: string;
        user?: user;
        version?: string;
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
    id?: string;
    /**
     *
     * @since v3
     */
    public?: boolean;
    /**
     *
     * @since v3
     */
    url?: string;
    /**
     *
     * @since v3
     */
    user?: user;
}
