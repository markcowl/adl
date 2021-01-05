
/**
 *
 * @since v3
 */
export interface deleteFile {
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
        parents?: {
            html_url?: string;
            sha?: string;
            url?: string;
        };
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
    content?: string;
}
