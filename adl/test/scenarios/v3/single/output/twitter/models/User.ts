import { UserWithheld } from './UserWithheld';
/** @since 2.3 */
export interface User {
    /** @since 2.3 */
    created_at: dateTime;
    /** @since 2.3 */
    description: string;
    /** @since 2.3 */
    entities: {
        /**
         * @since 2.3
         */
        description: FullTextEntities;
        /** @since 2.3 */
        url: {
            /**
             * @since 2.3
             */
            urls: Array<UrlEntity> & MinimumElements<1>;
        };
    };
    /**
     * @since 2.3
     */
    id?: string & RegularExpression<"^[0-9]{1,19}$">;
    /** @since 2.3 */
    location: string;
    /** @since 2.3 */
    name?: string;
    /**
     * @since 2.3
     */
    pinned_tweet_id: string & RegularExpression<"^[0-9]{1,19}$">;
    /** @since 2.3 */
    profile_image_url: string;
    /** @since 2.3 */
    protected: boolean;
    /** @since 2.3 */
    public_metrics: {
        /** @since 2.3 */
        followers_count?: int64;
        /** @since 2.3 */
        following_count?: int64;
        /** @since 2.3 */
        listed_count?: int64;
        /** @since 2.3 */
        tweet_count?: int64;
    };
    /** @since 2.3 */
    url: string;
    /**
     * @since 2.3
     */
    username?: string & RegularExpression<"^[A-Za-z0-9_]{1,15}$">;
    /** @since 2.3 */
    verified: boolean;
    /**
     * @since 2.3
     */
    withheld: UserWithheld;
}
