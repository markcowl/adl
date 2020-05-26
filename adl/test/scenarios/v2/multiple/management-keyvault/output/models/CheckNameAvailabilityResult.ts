
/** @since 2019-09-01 */
export interface CheckNameAvailabilityResult {
    /** @since 2019-09-01 */
    readonly nameAvailable: boolean & ;
    /** @since 2019-09-01 */
    readonly reason: Reason;
    /** @since 2019-09-01 */
    readonly message: string & ;
}
