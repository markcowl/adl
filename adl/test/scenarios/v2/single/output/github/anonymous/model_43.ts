export interface model_43 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: string;
        email: string;
        name: string;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
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
}
