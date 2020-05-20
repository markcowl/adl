import { user } from './user';
export interface commit {
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
    files: any;
    parents: any;
    sha: any;
    stats: {
        additions: any;
        deletions: any;
        total: any;
    };
    url: any;
}
