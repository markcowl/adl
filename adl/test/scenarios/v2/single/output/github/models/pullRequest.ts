export interface pullRequest {
    _links: {
        comments: {
            href: string;
        };
        html: {
            href: string;
        };
        review_comments: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    additions: int64;
    base: {
        label: string;
        ref: string;
        repo: repo;
        sha: string;
        user: {
            avatar_url: string;
            gravatar_id: string;
            id: int64;
            login: string;
            url: string;
        };
    };
    body: string;
    changed_files: int64;
    closed_at: string;
    comments: int64;
    commits: int64;
    created_at: string;
    deletions: int64;
    diff_url: string;
    head: {
        label: string;
        ref: string;
        repo: repo;
        sha: string;
        user: {
            avatar_url: string;
            gravatar_id: string;
            id: int64;
            login: string;
            url: string;
        };
    };
    html_url: string;
    issue_url: string;
    merge_commit_sha: string;
    mergeable: boolean;
    merged: boolean;
    merged_at: string;
    merged_by: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
    number: int64;
    patch_url: string;
    state: string;
    title: string;
    updated_at: string;
    url: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
