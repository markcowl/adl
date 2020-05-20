export interface pullRequest {
    _links: {
        comments: {
            href: any;
        };
        html: {
            href: any;
        };
        review_comments: {
            href: any;
        };
        self: {
            href: any;
        };
    };
    additions: any;
    base: {
        label: any;
        ref: any;
        repo: repo;
        sha: any;
        user: {
            avatar_url: any;
            gravatar_id: any;
            id: any;
            login: any;
            url: any;
        };
    };
    body: any;
    changed_files: any;
    closed_at: any;
    comments: any;
    commits: any;
    created_at: any;
    deletions: any;
    diff_url: any;
    head: {
        label: any;
        ref: any;
        repo: repo;
        sha: any;
        user: {
            avatar_url: any;
            gravatar_id: any;
            id: any;
            login: any;
            url: any;
        };
    };
    html_url: any;
    issue_url: any;
    merge_commit_sha: any;
    mergeable: any;
    merged: any;
    merged_at: any;
    merged_by: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
    number: any;
    patch_url: any;
    state: any;
    title: any;
    updated_at: any;
    url: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
