
/** @since 2018-11-25 */
export interface ApplicationInfo {
    /** @since 2018-11-25 */
    ResourceGroupName: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    LifeCycle: string;
    /** @since 2018-11-25 */
    OpsItemSNSTopicArn: string & MaxLength<300> & MinLength<20>;
    /** @since 2018-11-25 */
    OpsCenterEnabled: boolean;
    /** @since 2018-11-25 */
    CWEMonitorEnabled: boolean;
    /** @since 2018-11-25 */
    Remarks: string;
}
