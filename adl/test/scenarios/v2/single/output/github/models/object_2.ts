import { object_3 } from './object_3';
import { user } from './user';
export interface object_2 {
    author: user;
    commit: object_3;
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
