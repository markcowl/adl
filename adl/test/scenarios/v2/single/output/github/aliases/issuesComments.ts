import { user } from "../models/user";
export type issuesComments = Array<{
    _links?: {
        html?: {
            href?: string;
        };
        pull_request?: {
            href?: string;
        };
        self?: {
            href?: string;
        };
    };
    body?: string;
    commit_id?: string;
    created_at?: string;
    id?: int64;
    path?: string;
    position?: int64;
    updated_at?: string;
    url?: string;
    user?: user;
}>;
