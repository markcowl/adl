export interface createFile {
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
        html_url: string;
        message: string;
        parents: array;
        sha: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    content: {
        _links: {
            git: string;
            html: string;
            self: string;
        };
        git_url: string;
        html_url: string;
        name: string;
        path: string;
        sha: string;
        size: int64;
        type: string;
        url: string;
    };
}
