import { user } from "./user";
/**
 *
 * @since v3
 */
export interface branch {
    /**
     *
     * @since v3
     */
    _links?: {
        html?: string;
        self?: string;
    };
    /**
     *
     * @since v3
     */
    commit?: {
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
    name?: string;
}
