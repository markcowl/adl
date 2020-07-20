export type hook = Array<{
    active?: boolean;
    config?: {
        content_type?: string;
        url?: string;
    };
    created_at?: string;
    events?: Array<"push" | "issues" | "issue_comment" | "commit_comment" | "pull_request" | "pull_request_review_comment" | "gollum" | "watch" | "download" | "fork" | "fork_apply" | "member" | "public" | "team_add" | "status">;
    id?: int64;
    name?: string;
    updated_at?: string;
    url?: string;
}>;
