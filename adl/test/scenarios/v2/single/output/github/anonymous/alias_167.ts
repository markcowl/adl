export type alias_167 = Array<{
    _links: {
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    body: string;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    id: int64;
    path: string;
    position: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: string;
    url: string;
    user: user;
}>;
