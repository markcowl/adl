
/**
 * @description Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 */
export interface TweetWithheld {
    /**
     * @description Indicates if the content is being withheld for on the basis of copyright infringement.
     */
    copyright?: boolean;
    /**
     * @description Provides a list of countries where this content is not available.
     */
    country_codes?: Array<string & RegularExpression<"^[A-Z]{2}$">> & MinimumElements<1> & UniqueElements;
    /**
     * @description Indicates whether the content being withheld is the `tweet` or a `user`.
     */
    scope: enum_73;
}
