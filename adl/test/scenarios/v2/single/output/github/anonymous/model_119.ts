import { user } from '../models/user';
export interface model_119 {
    comments: int64;
    comments_url: string;
    created_at: string;
    description: string;
    files: {
        'ring.erl': {
            filename: string;
            raw_url: string;
            size: int64;
        };
    };
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    id: string;
    public: boolean;
    url: string;
    user: user;
}
