import { user } from '../models/user';
export interface object_37 {
    author: user;
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
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
