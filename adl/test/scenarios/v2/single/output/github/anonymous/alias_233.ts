export type alias_233 = Array<{
    _links: {
        comments: {
            href: string;
        };
        html: {
            href: string;
        };
        review_comments: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    base: {
        label: string;
        ref: string;
        repo: repo;
        sha: string;
        user: {
            avatar_url: string;
            gravatar_id: string;
            id: int64;
            login: string;
            url: string;
        };
    };
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    diff_url: string;
    head: {
        label: string;
        ref: string;
        repo: repo;
        sha: string;
        user: {
            avatar_url: string;
            gravatar_id: string;
            id: int64;
            login: string;
            url: string;
        };
    };
    html_url: string;
    issue_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    merged_at: string;
    number: int64;
    patch_url: string;
    state: "open" | "closed";
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: string;
    url: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}>;
