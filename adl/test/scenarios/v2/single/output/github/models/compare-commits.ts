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
        parents: array;
        sha: string;
        url: string;
    };
    behind_by: int64;
    commits: unknown /*= (not tsschema -- undefinedcommits/undefined ) =*/;
    diff_url: string;
    files: array;
    html_url: string;
    patch_url: string;
    permalink_url: string;
    status: string;
    total_commits: int64;
    url: string;
}
