
/**
 * @description Properties of the deleted vault.
 */
export interface DeletedVaultProperties {
    /**
     * @description The resource id of the original vault.
     */
    readonly vaultId: any;
    /**
     * @description The location of the original vault.
     */
    readonly location: any;
    /**
     * @description The deleted date.
     */
    readonly deletionDate: any;
    /**
     * @description The scheduled purged date.
     */
    readonly scheduledPurgeDate: any;
    /**
     * @description Tags of the original vault.
     */
    readonly tags: any;
}
