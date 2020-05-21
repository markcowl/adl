export interface compare_commits {
    ahead_by: int64;
    base_commit: {
        author: user;
        commit: {
            author: {
                date: string;
                email: string;
                name: string;
            };
            committer: {
                date: string;
                email: string;
                name: string;
            };
            message: string;
            tree: {
                sha: string;
                url: string;
            };
            url: string;
        };
        committer: user;
        parents: Array<{
            sha: string;
            url: string;
        }>;
        sha: string;
        url: string;
    };
    behind_by: int64;
    commits: Array<{
        author: user;
        commit: {
            author: {
                date: string;
                email: string;
                name: string;
            };
            committer: {
                date: string;
                email: string;
                name: string;
            };
            message: string;
            tree: {
                sha: string;
                url: string;
            };
            url: string;
        };
        committer: user;
        parents: Array<{
            sha: string;
            url: string;
        }>;
        sha: string;
        url: string;
    }>;
    diff_url: string;
    files: Array<{
        additions: int64;
        blob_url: string;
        changes: int64;
        contents_url: string;
        deletions: int64;
        filename: string;
        patch: string;
        raw_url: string;
        sha: string;
        status: string;
    }>;
    html_url: string;
    patch_url: string;
    permalink_url: string;
    status: string;
    total_commits: int64;
    url: string;
}
