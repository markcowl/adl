import { actor } from "./actor";
/**
 *
 * @since v3
 */
export interface notifications {
    /**
     *
     * @since v3
     */
    id?: int64;
    /**
     *
     * @since v3
     */
    last_read_at?: string;
    /**
     *
     * @since v3
     */
    reason?: string;
    /**
     *
     * @since v3
     */
    repository?: {
        description?: string;
        fork?: boolean;
        full_name?: string;
        html_url?: string;
        id?: int64;
        name?: string;
        owner?: actor;
        private?: boolean;
        url?: string;
    };
    /**
     *
     * @since v3
     */
    subject?: {
        latest_comment_url?: string;
        title?: string;
        type?: string;
        url?: string;
    };
    /**
     *
     * @since v3
     */
    unread?: boolean;
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
}
