import { user } from "../models/user";
export type deployment_statuses = Array<{
    created_at?: string;
    creator?: user;
    description?: string;
    id?: int64;
    payload?: string;
    state?: string;
    target_url?: string;
    updated_at?: string;
    url?: string;
}>;
