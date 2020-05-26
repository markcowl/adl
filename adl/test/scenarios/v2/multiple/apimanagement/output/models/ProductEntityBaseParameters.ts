
/** @since 2019-12-01 */
export interface ProductEntityBaseParameters {
    /** @since 2019-12-01 */
    description: string & MaxLength<1000> & MinLength<1>;
    /** @since 2019-12-01 */
    terms: string;
    /** @since 2019-12-01 */
    subscriptionRequired: boolean;
    /** @since 2019-12-01 */
    approvalRequired: boolean;
    /** @since 2019-12-01 */
    subscriptionsLimit: int32;
    /** @since 2019-12-01 */
    state: ProductState;
}
