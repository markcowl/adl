export interface model_66 {
    author: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
    /**
     * @description The Total number of commits authored by the contributor.
     */
    total: int64;
    weeks: Array<{
        /**
         * @description Number of additions.
         */
        a: int64;
        /**
         * @description Number of commits.
         */
        c: int64;
        /**
         * @description Number of deletions.
         */
        d: int64;
        /**
         * @description Start of the week.
         */
        w: string;
    }>;
}
