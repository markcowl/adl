
/** @since 2.3 */
export interface UserWithheld {
    /** @since 2.3 */
    country_codes?: Array<string & RegularExpression<"^[A-Z]{2}$">> & MinimumElements<1> & UniqueElements;
    /** @since 2.3 */
    scope: "user";
}
