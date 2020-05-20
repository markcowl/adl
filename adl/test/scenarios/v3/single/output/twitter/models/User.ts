import { UserWithheld } from './UserWithheld';
/**
 * @description The Twitter User object
 */
export interface User {
    /**
     * @description Creation time of this user.
     */
    created_at: any;
    /**
     * @description The text of this user's profile description (also known as bio), if the user provided one.
     */
    description: any;
    /**
     * @description A list of metadata found in the user's profile description.
     */
    entities: {
        description: FullTextEntities;
        /**
         * @description Expanded details for the URL specified in the user's profile, with start and end indices.
         */
        url: {
            urls: any;
        };
    };
    id?: any;
    /**
     * @description The location specified in the user's profile, if the user provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
     */
    location: any;
    /**
     * @description The friendly name of this user, as shown on their profile.
     */
    name?: any;
    pinned_tweet_id: any;
    /**
     * @description The URL to the profile image for this user.
     */
    profile_image_url: any;
    /**
     * @description Indicates if this user has chosen to protect their Tweets (in other words, if this user's Tweets are private).
     */
    protected: any;
    /**
     * @description A list of metrics for this user
     */
    public_metrics: {
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
    };
    /**
     * @description The URL specified in the user's profile.
     */
    url: any;
    username?: any;
    /**
     * @description Indicate if this user is a verified Twitter User.
     */
    verified: any;
    withheld: UserWithheld;
}
