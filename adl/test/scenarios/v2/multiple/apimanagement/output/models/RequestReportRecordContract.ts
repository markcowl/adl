
/** @since 2019-12-01 */
export interface RequestReportRecordContract {
    /** @since 2019-12-01 */
    apiId: string;
    /** @since 2019-12-01 */
    operationId: string;
    /** @since 2019-12-01 */
    readonly productId: string & ;
    /** @since 2019-12-01 */
    readonly userId: string & ;
    /** @since 2019-12-01 */
    method: string;
    /** @since 2019-12-01 */
    url: string;
    /** @since 2019-12-01 */
    ipAddress: string;
    /** @since 2019-12-01 */
    backendResponseCode: string;
    /** @since 2019-12-01 */
    responseCode: int32;
    /** @since 2019-12-01 */
    responseSize: int32;
    /** @since 2019-12-01 */
    timestamp: dateTime;
    /** @since 2019-12-01 */
    cache: string;
    /** @since 2019-12-01 */
    apiTime: double;
    /** @since 2019-12-01 */
    serviceTime: double;
    /** @since 2019-12-01 */
    apiRegion: string;
    /** @since 2019-12-01 */
    subscriptionId: string;
    /** @since 2019-12-01 */
    requestId: string;
    /** @since 2019-12-01 */
    requestSize: int32;
}
