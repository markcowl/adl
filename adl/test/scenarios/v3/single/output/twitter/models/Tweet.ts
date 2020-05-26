import { ContextAnnotation } from './ContextAnnotation';
import { FullTextEntities } from './FullTextEntities';
import { TweetWithheld } from './TweetWithheld';
/**
 * @since 2.3
 */
export interface Tweet {
    /** @since 2.3 */
    attachments: {
        /** @since 2.3 */
        media_keys: Array<string & RegularExpression<"^([0-9]+)_([0-9]+)$">> & MinimumElements<1>;
        /** @since 2.3 */
        poll_ids: Array<string & RegularExpression<"^[0-9]{1,19}$">> & MinimumElements<1>;
    };
    /**
     * @since 2.3
     */
    author_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @since 2.3
     */
    context_annotations: Array<ContextAnnotation> & MinimumElements<1>;
    /** @since 2.3 */
    created_at: dateTime;
    /**
     * @since 2.3
     */
    entities: FullTextEntities;
    /** @since 2.3 */
    geo: {
        /**
         * @since 2.3
         */
        coordinates: Point;
        /**
         * @since 2.3
         */
        place_id: string;
    };
    /**
     * @since 2.3
     */
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @since 2.3
     */
    in_reply_to_user_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /** @since 2.3 */
    lang: string;
    /** @since 2.3 */
    possibly_sensitive: boolean;
    /** @since 2.3 */
    public_metrics: {
        /** @since 2.3 */
        like_count?: int64;
        /** @since 2.3 */
        quote_count: int64;
        /** @since 2.3 */
        reply_count?: int64;
        /** @since 2.3 */
        retweet_count?: int64;
    };
    /** @since 2.3 */
    referenced_tweets: Array<{
        /**
         * @since 2.3
         */
        id?: string & RegularExpression<"^[0-9]{1,19}$">;
        /**
         * @since 2.3
         */
        type?: "retweeted" | "quoted" | "replied_to";
    }> & MinimumElements<1>;
    /** @since 2.3 */
    source: string;
    /** @since 2.3 */
    text?: string;
    /**
     * @since 2.3
     */
    withheld: TweetWithheld;
}
