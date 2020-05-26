import { user } from './user';
/**
 * @since v3
 */
export interface issuesComment {
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: int64;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}
