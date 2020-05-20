
/**
 * @description Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 */
export interface TweetWithheld {
    /**
     * @description Indicates if the content is being withheld for on the basis of copyright infringement.
     */
    copyright?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Provides a list of countries where this content is not available.
     */
    country_codes?: unknown /*= (not tsschema -- undefinedcountry_codes/undefined ) =*/;
    /**
     * @description Indicates whether the content being withheld is the `tweet` or a `user`.
     */
    scope: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
