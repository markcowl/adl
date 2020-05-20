import { user } from './user';
export interface mergesSuccessful {
    author: user;
    comments_url: string;
    commit: {
        author: {
            date: string;
            email: string;
            name: string;
        };
        comment_count: int64;
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
    merged: boolean;
    message: string;
    parents: array;
    sha: string;
    url: string;
}
