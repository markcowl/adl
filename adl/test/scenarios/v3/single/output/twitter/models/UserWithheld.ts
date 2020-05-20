
/**
 * @description Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 */
export interface UserWithheld {
    /**
     * @description Provides a list of countries where this content is not available.
     */
    country_codes?: any;
    /**
     * @description Indicates that the content being withheld is a `user`.
     */
    scope: any;
}
