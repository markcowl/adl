
/** @since 2019-12-01 */
export interface ApiRevisionContract {
    /** @since 2019-12-01 */
    readonly apiId: string & ;
    /** @since 2019-12-01 */
    readonly apiRevision: string &  & MaxLength<100> & MinLength<1>;
    /** @since 2019-12-01 */
    readonly createdDateTime: dateTime & ;
    /** @since 2019-12-01 */
    readonly updatedDateTime: dateTime & ;
    /** @since 2019-12-01 */
    readonly description: string &  & MaxLength<256>;
    /** @since 2019-12-01 */
    readonly privateUrl: string & ;
    /** @since 2019-12-01 */
    readonly isOnline: boolean & ;
    /** @since 2019-12-01 */
    readonly isCurrent: boolean & ;
}
