
/**
 * @description Properties of the deleted vault.
 */
export interface DeletedVaultProperties {
    /**
     * @description The resource id of the original vault.
     */
    readonly vaultId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The location of the original vault.
     */
    readonly location: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The deleted date.
     */
    readonly deletionDate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The scheduled purged date.
     */
    readonly scheduledPurgeDate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Tags of the original vault.
     */
    readonly tags: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
