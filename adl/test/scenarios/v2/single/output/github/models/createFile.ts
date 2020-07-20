
/**
 *
 * @since v3
 */
export interface createFile {
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
        html_url?: string;
        message?: string;
        parents?: Array<{
            html_url?: string;
            sha?: string;
            url?: string;
        }>;
        sha?: string;
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
    content?: {
        _links?: {
            git?: string;
            html?: string;
            self?: string;
        };
        git_url?: string;
        html_url?: string;
        name?: string;
        path?: string;
        sha?: string;
        size?: int64;
        type?: string;
        url?: string;
    };
}
