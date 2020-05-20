import { Expansions } from './Expansions';
export interface TweetSearchResponse {
    data: any;
    errors: any;
    includes: Expansions;
    meta: {
        /**
         * @description Most recent Tweet Id returned by search query
         */
        newest_id: any;
        /**
         * @description This value is used to get the next 'page' of results by providing it to the next_token parameter.
         */
        next_token: any;
        /**
         * @description Oldest Tweet Id returned by search query
         */
        oldest_id: any;
        /**
         * @description Number of search query results
         */
        result_count: any;
    };
}
