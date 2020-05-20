export interface repoCommit {
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
    parents: any;
    sha: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
