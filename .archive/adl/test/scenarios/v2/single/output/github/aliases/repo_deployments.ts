import { user } from "../models/user";
export type repo_deployments = Array<{
    created_at?: string;
    creator?: user;
    description?: string;
    id?: int64;
    payload?: string;
    sha?: string;
    statuses_url?: string;
    updated_at?: string;
    url?: string;
}>;
