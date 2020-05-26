
/** @since 2019-12-01 */
export interface SubscriptionKeysContract {
    /** @since 2019-12-01 */
    primaryKey: string & MaxLength<256> & MinLength<1>;
    /** @since 2019-12-01 */
    secondaryKey: string & MaxLength<256> & MinLength<1>;
}
