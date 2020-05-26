
/** @since 2019-12-01 */
export interface TenantConfigurationSyncStateContract {
    /** @since 2019-12-01 */
    branch: string;
    /** @since 2019-12-01 */
    commitId: string;
    /** @since 2019-12-01 */
    isExport: boolean;
    /** @since 2019-12-01 */
    isSynced: boolean;
    /** @since 2019-12-01 */
    isGitEnabled: boolean;
    /** @since 2019-12-01 */
    syncDate: dateTime;
    /** @since 2019-12-01 */
    configurationChangeDate: dateTime;
}
