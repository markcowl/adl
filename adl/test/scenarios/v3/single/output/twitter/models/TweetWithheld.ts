
/** @since 2.3 */
export interface TweetWithheld {
    /** @since 2.3 */
    copyright?: boolean;
    /** @since 2.3 */
    country_codes?: Array<string & RegularExpression<"^[A-Z]{2}$">> & MinimumElements<1> & UniqueElements;
    /** @since 2.3 */
    scope: "tweet" | "user";
}
