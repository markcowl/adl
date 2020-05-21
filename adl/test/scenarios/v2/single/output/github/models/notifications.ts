export interface notifications {
    id: int64;
    last_read_at: string;
    reason: string;
    repository: {
        description: string;
        fork: boolean;
        full_name: string;
        html_url: string;
        id: int64;
        name: string;
        owner: actor;
        private: boolean;
        url: string;
    };
    subject: {
        latest_comment_url: string;
        title: string;
        type: string;
        url: string;
    };
    unread: boolean;
    updated_at: string;
    url: string;
}
