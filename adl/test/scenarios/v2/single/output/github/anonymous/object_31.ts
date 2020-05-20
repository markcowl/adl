import { user } from '../models/user';
export interface object_31 {
    author: user;
    commit: {
        author: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
            email: string;
            name: string;
        };
        committer: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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
