import { user } from './user';
export interface commit {
    author: user;
    commit: {
        author: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
            email: string;
            name: string;
        };
        committer: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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
    files: array;
    parents: array;
    sha: string;
    stats: {
        additions: int64;
        deletions: int64;
        total: int64;
    };
    url: string;
}
