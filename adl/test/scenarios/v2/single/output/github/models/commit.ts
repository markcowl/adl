import { user } from './user';
export interface commit {
    author: user;
    commit: {
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
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    committer: user;
    files: Array<{
        additions: int64;
        blob_url: string;
        changes: int64;
        deletions: int64;
        filename: string;
        patch: string;
        raw_url: string;
        status: string;
    }>;
    parents: Array<{
        sha: string;
        url: string;
    }>;
    sha: string;
    stats: {
        additions: int64;
        deletions: int64;
        total: int64;
    };
    url: string;
}
