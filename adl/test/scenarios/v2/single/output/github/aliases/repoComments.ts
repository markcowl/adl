import { user } from "../models/user";
export type repoComments = Array<{
    body?: string;
    commit_id?: string;
    created_at?: string;
    html_url?: string;
    id?: int64;
    line?: int64;
    path?: string;
    position?: int64;
    updated_at?: string;
    url?: string;
    user?: user;
}>;
