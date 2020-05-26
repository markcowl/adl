
/** @since 2019-12-01 */
export interface ReportRecordContract {
    /** @since 2019-12-01 */
    name: string;
    /** @since 2019-12-01 */
    timestamp: dateTime;
    /** @since 2019-12-01 */
    interval: string;
    /** @since 2019-12-01 */
    country: string;
    /** @since 2019-12-01 */
    region: string;
    /** @since 2019-12-01 */
    zip: string;
    /** @since 2019-12-01 */
    readonly userId: string & ;
    /** @since 2019-12-01 */
    readonly productId: string & ;
    /** @since 2019-12-01 */
    apiId: string;
    /** @since 2019-12-01 */
    operationId: string;
    /** @since 2019-12-01 */
    apiRegion: string;
    /** @since 2019-12-01 */
    subscriptionId: string;
    /** @since 2019-12-01 */
    callCountSuccess: int32;
    /** @since 2019-12-01 */
    callCountBlocked: int32;
    /** @since 2019-12-01 */
    callCountFailed: int32;
    /** @since 2019-12-01 */
    callCountOther: int32;
    /** @since 2019-12-01 */
    callCountTotal: int32;
    /** @since 2019-12-01 */
    bandwidth: int64;
    /** @since 2019-12-01 */
    cacheHitCount: int32;
    /** @since 2019-12-01 */
    cacheMissCount: int32;
    /** @since 2019-12-01 */
    apiTimeAvg: double;
    /** @since 2019-12-01 */
    apiTimeMin: double;
    /** @since 2019-12-01 */
    apiTimeMax: double;
    /** @since 2019-12-01 */
    serviceTimeAvg: double;
    /** @since 2019-12-01 */
    serviceTimeMin: double;
    /** @since 2019-12-01 */
    serviceTimeMax: double;
}
