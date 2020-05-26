
/** @since 2019-12-01 */
export interface GroupCreateParametersProperties {
    /** @since 2019-12-01 */
    displayName?: string & MaxLength<300> & MinLength<1>;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    type: GroupType;
    /** @since 2019-12-01 */
    externalId: string;
}
