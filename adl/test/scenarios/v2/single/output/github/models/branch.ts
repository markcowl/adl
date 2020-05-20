export interface branch {
    _links: {
        html: any;
        self: any;
    };
    commit: {
        author: user;
        commit: {
            author: {
                /**
                 * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
                 */
                date: any;
                email: any;
                name: any;
            };
            committer: {
                /**
                 * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
                 */
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
    name: any;
}
