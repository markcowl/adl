
/** @since 2019-12-01 */
export interface SubscriptionContractProperties {
    /** @since 2019-12-01 */
    ownerId: string;
    /** @since 2019-12-01 */
    scope?: string;
    /** @since 2019-12-01 */
    displayName: string & MaxLength<100> & MinLength<0>;
    /** @since 2019-12-01 */
    state?: SubscriptionState;
    /** @since 2019-12-01 */
    readonly createdDate: dateTime & ;
    /** @since 2019-12-01 */
    startDate: dateTime;
    /** @since 2019-12-01 */
    expirationDate: dateTime;
    /** @since 2019-12-01 */
    endDate: dateTime;
    /** @since 2019-12-01 */
    notificationDate: dateTime;
    /** @since 2019-12-01 */
    primaryKey: string & MaxLength<256> & MinLength<1>;
    /** @since 2019-12-01 */
    secondaryKey: string & MaxLength<256> & MinLength<1>;
    /** @since 2019-12-01 */
    stateComment: string;
    /** @since 2019-12-01 */
    allowTracing: boolean;
}
