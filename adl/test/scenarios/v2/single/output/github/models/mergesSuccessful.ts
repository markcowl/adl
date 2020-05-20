import { user } from './user';
export interface mergesSuccessful {
    author: user;
    comments_url: any;
    commit: {
        author: {
            date: any;
            email: any;
            name: any;
        };
        comment_count: any;
        committer: {
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
    merged: any;
    message: any;
    parents: any;
    sha: any;
    url: any;
}
