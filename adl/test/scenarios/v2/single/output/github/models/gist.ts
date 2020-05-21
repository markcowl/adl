import { user } from './user';
export interface gist {
    comments: int64;
    comments_url: string;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: string;
    description: string;
    files: {
        'ring.erl': {
            filename: string;
            raw_url: string;
            size: int64;
        };
    };
    forks: Array<{
        /**
         * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
         */
        created_at: string;
        url: string;
        user: user;
    }>;
    git_pull_url: string;
    git_push_url: string;
    history: Array<{
        change_status: {
            additions: int64;
            deletions: int64;
            total: int64;
        };
        /**
         * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
         */
        committed_at: string;
        url: string;
        user: user;
        version: string;
    }>;
    html_url: string;
    id: string;
    public: boolean;
    url: string;
    user: user;
}
