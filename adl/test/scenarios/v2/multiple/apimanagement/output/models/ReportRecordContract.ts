
/**
 * @description Report data.
 */
export interface ReportRecordContract {
    /**
     * @description Name depending on report endpoint specifies product, API, operation or developer name.
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    timestamp: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
     */
    interval: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Country to which this record data is related.
     */
    country: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Country region to which this record data is related.
     */
    region: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Zip code to which this record data is related.
     */
    zip: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description User identifier path. /users/{userId}
     */
    readonly userId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Product identifier path. /products/{productId}
     */
    readonly productId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description API identifier path. /apis/{apiId}
     */
    apiId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Operation identifier path. /apis/{apiId}/operations/{operationId}
     */
    operationId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description API region identifier.
     */
    apiRegion: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Subscription identifier path. /subscriptions/{subscriptionId}
     */
    subscriptionId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
     */
    callCountSuccess: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
     */
    callCountBlocked: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
     */
    callCountFailed: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of other calls.
     */
    callCountOther: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Total number of calls.
     */
    callCountTotal: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Bandwidth consumed.
     */
    bandwidth: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of times when content was served from cache policy.
     */
    cacheHitCount: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of times content was fetched from backend.
     */
    cacheMissCount: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Average time it took to process request.
     */
    apiTimeAvg: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Minimum time it took to process request.
     */
    apiTimeMin: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Maximum time it took to process request.
     */
    apiTimeMax: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Average time it took to process request on backend.
     */
    serviceTimeAvg: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Minimum time it took to process request on backend.
     */
    serviceTimeMin: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Maximum time it took to process request on backend.
     */
    serviceTimeMax: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
