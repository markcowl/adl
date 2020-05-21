
/**
 * @description Engagement metrics for the Tweet at the time of the request.
 */
export interface model_61 {
    /**
     * @description Number of times this Tweet has been liked.
     */
    like_count?: int64;
    /**
     * @description Number of times this Tweet has been quoted.
     */
    quote_count: int64;
    /**
     * @description Number of times this Tweet has been replied to.
     */
    reply_count?: int64;
    /**
     * @description Number of times this Tweet has been Retweeted.
     */
    retweet_count?: int64;
}
