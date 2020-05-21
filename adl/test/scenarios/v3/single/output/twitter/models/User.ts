import { UserWithheld } from './UserWithheld';
/**
 * @description The Twitter User object
 */
export interface User {
    /**
     * @description Creation time of this user.
     */
    created_at: dateTime;
    /**
     * @description The text of this user's profile description (also known as bio), if the user provided one.
     */
    description: string;
    /**
     * @description A list of metadata found in the user's profile description.
     */
    entities: {
        description: FullTextEntities;
        /**
         * @description Expanded details for the URL specified in the user's profile, with start and end indices.
         */
        url: {
            urls: Array<UrlEntity> & MinimumElements<1>;
        };
    };
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description The location specified in the user's profile, if the user provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
     */
    location: string;
    /**
     * @description The friendly name of this user, as shown on their profile.
     */
    name?: string;
    pinned_tweet_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /**
     * @description The URL to the profile image for this user.
     */
    profile_image_url: string;
    /**
     * @description Indicates if this user has chosen to protect their Tweets (in other words, if this user's Tweets are private).
     */
    protected: boolean;
    /**
     * @description A list of metrics for this user
     */
    public_metrics: {
        /**
         * @description Number of users who are following this user.
         */
        followers_count?: int64;
        /**
         * @description Number of users this user is following.
         */
        following_count?: int64;
        /**
         * @description The number of lists that include this user.
         */
        listed_count?: int64;
        /**
         * @description The number of Tweets (including Retweets) posted by this user.
         */
        tweet_count?: int64;
    };
    /**
     * @description The URL specified in the user's profile.
     */
    url: string;
    username?: string & RegularExpression<"^[A-Za-z0-9_]{1,15}$">;
    /**
     * @description Indicate if this user is a verified Twitter User.
     */
    verified: boolean;
    withheld: UserWithheld;
}
