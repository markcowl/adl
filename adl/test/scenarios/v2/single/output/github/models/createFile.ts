export interface createFile {
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
        html_url: any;
        message: any;
        parents: any;
        sha: any;
        tree: {
            sha: any;
            url: any;
        };
        url: any;
    };
    content: {
        _links: {
            git: any;
            html: any;
            self: any;
        };
        git_url: any;
        html_url: any;
        name: any;
        path: any;
        sha: any;
        size: any;
        type: any;
        url: any;
    };
}
