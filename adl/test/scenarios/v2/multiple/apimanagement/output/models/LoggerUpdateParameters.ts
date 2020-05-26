
/** @since 2019-12-01 */
export interface LoggerUpdateParameters {
    /** @since 2019-12-01 */
    loggerType: LoggerType;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    credentials: Dictionary<string>;
    /** @since 2019-12-01 */
    isBuffered: boolean;
}
