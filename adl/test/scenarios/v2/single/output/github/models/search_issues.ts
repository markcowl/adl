import { user } from "./user";
/**
 *
 * @since v3
 */
export interface search_issues {
    /**
     *
     * @since v3
     */
    items?: Array<{
        assignee?: any;
        body?: string;
        closed_at?: any;
        comments?: int64;
        comments_url?: string;
        created_at?: string;
        events_url?: string;
        html_url?: string;
        id?: int64;
        labels?: Array<{
            color?: string;
            name?: string;
            url?: string;
        }>;
        labels_url?: string;
        milestone?: any;
        number?: int64;
        pull_request?: {
            diff_url?: any;
            html_url?: any;
            patch_url?: any;
        };
        score?: double;
        state?: string;
        title?: string;
        updated_at?: string;
        url?: string;
        user?: user;
    }>;
    /**
     *
     * @since v3
     */
    total_count?: int64;
}
