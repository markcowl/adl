import { Expansions } from './Expansions';
export interface TweetSearchResponse {
    data: unknown /*= (not tsschema -- undefineddata/undefined ) =*/;
    errors: unknown /*= (not tsschema -- undefinederrors/undefined ) =*/;
    includes: Expansions;
    meta: {
        /**
         * @description Most recent Tweet Id returned by search query
         */
        newest_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description This value is used to get the next 'page' of results by providing it to the next_token parameter.
         */
        next_token: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description Oldest Tweet Id returned by search query
         */
        oldest_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description Number of search query results
         */
        result_count: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    };
}
