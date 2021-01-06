
/**
 *
 * @since v3
 */
export interface pullsComment {
    /**
     *
     * @since v3
     */
    _links?: {
        html?: {
            href?: string;
        };
        pull_request?: {
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
    body?: string;
    /**
     *
     * @since v3
     */
    commit_id?: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     * @since v3
     */
    created_at?: string;
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    path?: string;
    /**
     *
     * @since v3
     */
    position?: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
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
