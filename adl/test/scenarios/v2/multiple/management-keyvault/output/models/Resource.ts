
/** @since 2019-09-01 */
export interface Resource {
    /** @since 2019-09-01 */
    readonly id: string & ;
    /** @since 2019-09-01 */
    readonly name: string & ;
    /** @since 2019-09-01 */
    readonly type: string & ;
    /** @since 2019-09-01 */
    readonly location: string & ;
    /** @since 2019-09-01 */
    readonly tags: Dictionary<string> & ;
}
