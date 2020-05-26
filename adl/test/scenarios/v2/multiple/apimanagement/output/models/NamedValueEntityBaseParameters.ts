
/** @since 2019-12-01 */
export interface NamedValueEntityBaseParameters {
    /** @since 2019-12-01 */
    tags: Array<string> & MaximumElements<32>;
    /** @since 2019-12-01 */
    secret: boolean;
}
