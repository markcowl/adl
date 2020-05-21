
/**
 * @description Subscription keys.
 */
export interface SubscriptionKeysContract {
    /**
     * @description Subscription primary key.
     */
    primaryKey: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Subscription secondary key.
     */
    secondaryKey: string & MaxLength<256> & MinLength<1>;
}
