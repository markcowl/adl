
/**
 * @description Tenant Configuration Synchronization State.
 */
export interface TenantConfigurationSyncStateContract {
    /**
     * @description The name of Git branch.
     */
    branch: any;
    /**
     * @description The latest commit Id.
     */
    commitId: any;
    /**
     * @description value indicating if last sync was save (true) or deploy (false) operation.
     */
    isExport: any;
    /**
     * @description value indicating if last synchronization was later than the configuration change.
     */
    isSynced: any;
    /**
     * @description value indicating whether Git configuration access is enabled.
     */
    isGitEnabled: any;
    /**
     * @description The date of the latest synchronization. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    syncDate: any;
    /**
     * @description The date of the latest configuration change. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    configurationChangeDate: any;
}
