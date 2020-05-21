import { user } from '../models/user';
export interface model_40 {
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
    parents: Array<{
        sha: string;
        url: string;
    }>;
    sha: string;
    url: string;
}
