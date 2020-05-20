import { FullTextEntities } from './FullTextEntities';
import { TweetWithheld } from './TweetWithheld';
export interface Tweet {
    /**
     * @description Specifies the type of attachments (if any) present in this Tweet.
     */
    attachments: {
        /**
         * @description A list of Media Keys for each one of the media attachments (if media are attached).
         */
        media_keys: any;
        /**
         * @description A list of poll IDs (if polls are attached).
         */
        poll_ids: any;
    };
    author_id: any;
    context_annotations: any;
    /**
     * @description Creation time of the Tweet.
     */
    created_at: any;
    entities: FullTextEntities;
    /**
     * @description The location tagged on the Tweet, if the user provided one.
     */
    geo: {
        coordinates: Point;
        place_id: any;
    };
    id?: any;
    in_reply_to_user_id: any;
    /**
     * @description Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.
     */
    lang: any;
    /**
     * @description Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
     */
    possibly_sensitive: any;
    /**
     * @description Engagement metrics for the Tweet at the time of the request.
     */
    public_metrics: {
        /**
         * @description Number of times this Tweet has been liked.
         */
        like_count?: any;
        /**
         * @description Number of times this Tweet has been quoted.
         */
        quote_count: any;
        /**
         * @description Number of times this Tweet has been replied to.
         */
        reply_count?: any;
        /**
         * @description Number of times this Tweet has been Retweeted.
         */
        retweet_count?: any;
    };
    /**
     * @description A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
     */
    referenced_tweets: any;
    /**
     * @description The name of the app the user Tweeted from.
     */
    source: any;
    /**
     * @description The content of the Tweet.
     */
    text?: any;
    withheld: TweetWithheld;
}
