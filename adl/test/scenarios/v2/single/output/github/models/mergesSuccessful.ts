import { object_97 } from './object_97';
import { user } from './user';
export interface mergesSuccessful {
    author: user;
    comments_url: string;
    commit: object_97;
    committer: user;
    merged: boolean;
    message: string;
    parents: array;
    sha: string;
    url: string;
}
