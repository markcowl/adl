
/**
 *
 * @since v3
 */
export interface search_issues_by_keyword {
    /**
     *
     * @since v3
     */
    issues?: Array<{
        body?: string;
        comments?: int64;
        created_at?: string;
        gravatar_id?: string;
        html_url?: string;
        labels?: Array<string>;
        number?: int64;
        position?: int64;
        state?: string;
        title?: string;
        updated_at?: string;
        user?: string;
        votes?: int64;
    }>;
}
