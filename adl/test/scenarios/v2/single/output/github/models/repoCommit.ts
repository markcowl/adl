import { object_157 } from './object_157';
import { object_158 } from './object_158';
import { object_160 } from './object_160';
export interface repoCommit {
    author: object_157;
    committer: object_158;
    message: string;
    parents: array;
    sha: string;
    tree: object_160;
    url: string;
}
