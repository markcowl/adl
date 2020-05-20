export interface pullsComment {
    _links: {
        html: {
            href: any;
        };
        pull_request: {
            href: any;
        };
        self: {
            href: any;
        };
    };
    body: any;
    commit_id: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    id: any;
    path: any;
    position: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
