
/** @since 2019-09-01 */
export interface Attributes {
    /** @since 2019-09-01 */
    enabled: boolean;
    /** @since 2019-09-01 */
    nbf: time;
    /** @since 2019-09-01 */
    exp: time;
    /** @since 2019-09-01 */
    readonly created: time;
    /** @since 2019-09-01 */
    readonly updated: time;
}
