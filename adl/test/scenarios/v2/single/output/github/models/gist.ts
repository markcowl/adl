import { user } from './user';
export interface gist {
    comments: any;
    comments_url: any;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: any;
    description: any;
    files: {
        'ring.erl': {
            filename: any;
            raw_url: any;
            size: any;
        };
    };
    forks: any;
    git_pull_url: any;
    git_push_url: any;
    history: any;
    html_url: any;
    id: any;
    public: any;
    url: any;
    user: user;
}
