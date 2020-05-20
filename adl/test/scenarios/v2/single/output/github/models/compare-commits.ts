export interface compare_commits {
    ahead_by: any;
    base_commit: {
        author: user;
        commit: {
            author: {
                date: any;
                email: any;
                name: any;
            };
            committer: {
                date: any;
                email: any;
                name: any;
            };
            message: any;
            tree: {
                sha: any;
                url: any;
            };
            url: any;
        };
        committer: user;
        parents: any;
        sha: any;
        url: any;
    };
    behind_by: any;
    commits: any;
    diff_url: any;
    files: any;
    html_url: any;
    patch_url: any;
    permalink_url: any;
    status: any;
    total_commits: any;
    url: any;
}
