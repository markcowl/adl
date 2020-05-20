import { FullTextEntities } from './FullTextEntities';
import { object_187 } from './object_187';
import { object_188 } from './object_188';
import { object_189 } from './object_189';
import { TweetWithheld } from './TweetWithheld';
export interface Tweet {
    /**
     * @description Specifies the type of attachments (if any) present in this Tweet.
     */
    attachments: object_187;
    author_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    context_annotations: unknown /*= (not tsschema -- undefinedcontext_annotations/undefined ) =*/;
    /**
     * @description Creation time of the Tweet.
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    entities: FullTextEntities;
    /**
     * @description The location tagged on the Tweet, if the user provided one.
     */
    geo: object_188;
    id?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    in_reply_to_user_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.
     */
    lang: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
     */
    possibly_sensitive: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Engagement metrics for the Tweet at the time of the request.
     */
    public_metrics: object_189;
    /**
     * @description A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
     */
    referenced_tweets: unknown /*= (not tsschema -- undefinedreferenced_tweets/undefined ) =*/;
    /**
     * @description The name of the app the user Tweeted from.
     */
    source: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The content of the Tweet.
     */
    text?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    withheld: TweetWithheld;
}
