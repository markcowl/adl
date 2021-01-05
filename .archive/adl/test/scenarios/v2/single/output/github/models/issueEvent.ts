import { actor } from "./actor";
import { user } from "./user";
/**
 *
 * @since v3
 */
export interface issueEvent {
    /**
     *
     * @since v3
     */
    actor?: actor;
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
    event?: string;
    /**
     *
     * @since v3
     */
    issue?: {
        assignee?: user;
        body?: string;
        closed_at?: string;
        comments?: int64;
        created_at?: string;
        html_url?: string;
        labels?: Array<{
            color?: string;
            name?: string;
            url?: string;
        }>;
        milestone?: {
            closed_issues?: int64;
            created_at?: string;
            creator?: user;
            description?: string;
            due_on?: string;
            number?: int64;
            open_issues?: int64;
            state?: "open" | "closed";
            title?: string;
            url?: string;
        };
        number?: int64;
        pull_request?: {
            diff_url?: string;
            html_url?: string;
            patch_url?: string;
        };
        state?: "open" | "closed";
        title?: string;
        updated_at?: string;
        url?: string;
        user?: user;
    };
    /**
     *
     * @since v3
     */
    url?: string;
}
