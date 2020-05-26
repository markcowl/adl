
/** @since 2019-12-01 */
export interface TagContractProperties {
    /** @since 2019-12-01 */
    displayName?: string & MaxLength<160> & MinLength<1>;
}
