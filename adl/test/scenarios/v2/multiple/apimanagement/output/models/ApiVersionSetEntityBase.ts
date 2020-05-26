
/** @since 2019-12-01 */
export interface ApiVersionSetEntityBase {
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    versionQueryName: string & MaxLength<100> & MinLength<1>;
    /** @since 2019-12-01 */
    versionHeaderName: string & MaxLength<100> & MinLength<1>;
}
