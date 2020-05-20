import { object_11 } from './object_11';
import { object_17 } from './object_17';
import { user } from './user';
export interface commit {
    author: user;
    commit: object_11;
    committer: user;
    files: array;
    parents: array;
    sha: string;
    stats: object_17;
    url: string;
}
