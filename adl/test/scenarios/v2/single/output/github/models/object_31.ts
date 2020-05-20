import { object_32 } from './object_32';
import { user } from './user';
export interface object_31 {
    author: user;
    commit: object_32;
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
