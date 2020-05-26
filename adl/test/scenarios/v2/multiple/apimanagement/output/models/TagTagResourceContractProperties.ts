
/** @since 2019-12-01 */
export interface TagTagResourceContractProperties {
    /** @since 2019-12-01 */
    id: string;
    /** @since 2019-12-01 */
    name: string & MaxLength<160> & MinLength<1>;
}
