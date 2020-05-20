
/**
 * @description Tenant Configuration Synchronization State.
 */
export interface TenantConfigurationSyncStateContract {
    /**
     * @description The name of Git branch.
     */
    branch: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The latest commit Id.
     */
    commitId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description value indicating if last sync was save (true) or deploy (false) operation.
     */
    isExport: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description value indicating if last synchronization was later than the configuration change.
     */
    isSynced: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description value indicating whether Git configuration access is enabled.
     */
    isGitEnabled: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The date of the latest synchronization. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    syncDate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The date of the latest configuration change. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    configurationChangeDate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
