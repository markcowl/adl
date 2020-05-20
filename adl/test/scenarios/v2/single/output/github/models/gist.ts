import { user } from './user';
export interface gist {
    comments: int64;
    comments_url: string;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    description: string;
    files: {
        'ring.erl': {
            filename: string;
            raw_url: string;
            size: int64;
        };
    };
    forks: unknown /*= (not tsschema -- undefinedforks/undefined ) =*/;
    git_pull_url: string;
    git_push_url: string;
    history: unknown /*= (not tsschema -- undefinedhistory/undefined ) =*/;
    html_url: string;
    id: string;
    public: boolean;
    url: string;
    user: user;
}
