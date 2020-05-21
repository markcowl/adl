import { ContextAnnotation } from './ContextAnnotation';
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
        media_keys: Array<string & RegularExpression<"^([0-9]+)_([0-9]+)$">> & MinimumElements<1>;
        /**
         * @description A list of poll IDs (if polls are attached).
         */
        poll_ids: Array<string & RegularExpression<"^[0-9]{1,19}$">> & MinimumElements<1>;
    };
    author_id: string & RegularExpression<"^[0-9]{1,19}$">;
    context_annotations: Array<ContextAnnotation> & MinimumElements<1>;
    /**
     * @description Creation time of the Tweet.
     */
    created_at: dateTime;
    entities: FullTextEntities;
    /**
     * @description The location tagged on the Tweet, if the user provided one.
     */
    geo: {
        coordinates: Point;
        place_id: string;
    };
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    in_reply_to_user_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.
     */
    lang: string;
    /**
     * @description Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
     */
    possibly_sensitive: boolean;
    /**
     * @description Engagement metrics for the Tweet at the time of the request.
     */
    public_metrics: {
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
    };
    /**
     * @description A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
     */
    referenced_tweets: Array<{
        id?: string & RegularExpression<"^[0-9]{1,19}$">;
        type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    }> & MinimumElements<1>;
    /**
     * @description The name of the app the user Tweeted from.
     */
    source: string;
    /**
     * @description The content of the Tweet.
     */
    text?: string;
    withheld: TweetWithheld;
}
