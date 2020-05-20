import { FullTextEntities } from './models/FullTextEntities';
import { Point } from './models/Point';
export interface object_186 {
}
/**
 * @description Specifies the type of attachments (if any) present in this Tweet.
 */
export interface object_187 {
    /**
     * @description A list of Media Keys for each one of the media attachments (if media are attached).
     */
    media_keys: unknown /*= (not tsschema -- undefinedmedia_keys/undefined ) =*/;
    /**
     * @description A list of poll IDs (if polls are attached).
     */
    poll_ids: unknown /*= (not tsschema -- undefinedpoll_ids/undefined ) =*/;
}
/**
 * @description The location tagged on the Tweet, if the user provided one.
 */
export interface object_188 {
    coordinates: Point;
    place_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
/**
 * @description Engagement metrics for the Tweet at the time of the request.
 */
export interface object_189 {
    /**
     * @description Number of times this Tweet has been liked.
     */
    like_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of times this Tweet has been quoted.
     */
    quote_count: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of times this Tweet has been replied to.
     */
    reply_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of times this Tweet has been Retweeted.
     */
    retweet_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
export interface object_190 {
    id?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
/**
 * @description A list of metadata found in the user's profile description.
 */
export interface object_191 {
    description: FullTextEntities;
    /**
     * @description Expanded details for the URL specified in the user's profile, with start and end indices.
     */
    url: {
        urls: unknown /*= (not tsschema -- undefinedurls/undefined ) =*/;
    };
}
/**
 * @description Expanded details for the URL specified in the user's profile, with start and end indices.
 */
export interface object_192 {
    urls: unknown /*= (not tsschema -- undefinedurls/undefined ) =*/;
}
/**
 * @description A list of metrics for this user
 */
export interface object_193 {
    /**
     * @description Number of users who are following this user.
     */
    followers_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of users this user is following.
     */
    following_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of lists that include this user.
     */
    listed_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The number of Tweets (including Retweets) posted by this user.
     */
    tweet_count?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
export interface object_194 {
    message: string;
    parameters: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
export interface object_195 {
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
}
