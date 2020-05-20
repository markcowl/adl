export interface repoCommit {
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
    parents: array;
    sha: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
