
/** @since 2019-12-01 */
export interface LoggerContractProperties {
    /** @since 2019-12-01 */
    loggerType?: LoggerType;
    /** @since 2019-12-01 */
    description: string & MaxLength<256>;
    /** @since 2019-12-01 */
    credentials?: Dictionary<string>;
    /** @since 2019-12-01 */
    isBuffered: boolean;
    /** @since 2019-12-01 */
    resourceId: string;
}
