
/**
 * @description Properties of the deleted vault.
 */
export interface DeletedVaultProperties {
    /**
     * @description The resource id of the original vault.
     */
    readonly vaultId: string & ;
    /**
     * @description The location of the original vault.
     */
    readonly location: string & ;
    /**
     * @description The deleted date.
     */
    readonly deletionDate: dateTime & ;
    /**
     * @description The scheduled purged date.
     */
    readonly scheduledPurgeDate: dateTime & ;
    /**
     * @description Tags of the original vault.
     */
    readonly tags: Dictionary<string> & ;
}
