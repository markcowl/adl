export interface repoCommit {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: string;
        email: string;
        name: string;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: string;
        email: string;
        name: string;
    };
    message: string;
    parents: Array<{
        sha: string;
        url: string;
    }>;
    sha: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
