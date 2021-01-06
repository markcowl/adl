import { user } from "../models/user";
export type issues = Array<{
    assignee?: user;
    body?: string;
    closed_at?: string;
    comments?: int64;
    created_at?: string;
    html_url?: string;
    labels?: Array<{
        color?: string;
        name?: string;
        url?: string;
    }>;
    milestone?: {
        closed_issues?: int64;
        created_at?: string;
        creator?: user;
        description?: string;
        due_on?: string;
        number?: int64;
        open_issues?: int64;
        state?: "open" | "closed";
        title?: string;
        url?: string;
    };
    number?: int64;
    pull_request?: {
        diff_url?: string;
        html_url?: string;
        patch_url?: string;
    };
    state?: "open" | "closed";
    title?: string;
    updated_at?: string;
    url?: string;
    user?: user;
}>;
