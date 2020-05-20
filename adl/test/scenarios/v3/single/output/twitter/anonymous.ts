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
    media_keys: any;
    /**
     * @description A list of poll IDs (if polls are attached).
     */
    poll_ids: any;
}
/**
 * @description The location tagged on the Tweet, if the user provided one.
 */
export interface object_188 {
    coordinates: Point;
    place_id: any;
}
/**
 * @description Engagement metrics for the Tweet at the time of the request.
 */
export interface object_189 {
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
}
export interface object_190 {
    id?: any;
    type?: any;
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
        urls: any;
    };
}
/**
 * @description Expanded details for the URL specified in the user's profile, with start and end indices.
 */
export interface object_192 {
    urls: any;
}
/**
 * @description A list of metrics for this user
 */
export interface object_193 {
    /**
     * @description Number of users who are following this user.
     */
    followers_count?: any;
    /**
     * @description Number of users this user is following.
     */
    following_count?: any;
    /**
     * @description The number of lists that include this user.
     */
    listed_count?: any;
    /**
     * @description The number of Tweets (including Retweets) posted by this user.
     */
    tweet_count?: any;
}
export interface object_194 {
    message: any;
    parameters: any;
}
export interface object_195 {
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
}
