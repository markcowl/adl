import { user } from "../models/user";
export type comments = Array<{
    body?: string;
    created_at?: string;
    id?: int64;
    url?: string;
    user?: user;
}>;
