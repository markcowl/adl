
/** @since 2019-09-01 */
export interface DeletedVaultProperties {
    /** @since 2019-09-01 */
    readonly vaultId: string & ;
    /** @since 2019-09-01 */
    readonly location: string & ;
    /** @since 2019-09-01 */
    readonly deletionDate: dateTime & ;
    /** @since 2019-09-01 */
    readonly scheduledPurgeDate: dateTime & ;
    /** @since 2019-09-01 */
    readonly tags: Dictionary<string> & ;
}
