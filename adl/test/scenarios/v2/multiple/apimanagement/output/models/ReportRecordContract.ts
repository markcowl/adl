
/**
 * @description Report data.
 */
export interface ReportRecordContract {
    /**
     * @description Name depending on report endpoint specifies product, API, operation or developer name.
     */
    name: string;
    /**
     * @description Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    timestamp: dateTime;
    /**
     * @description Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
     */
    interval: string;
    /**
     * @description Country to which this record data is related.
     */
    country: string;
    /**
     * @description Country region to which this record data is related.
     */
    region: string;
    /**
     * @description Zip code to which this record data is related.
     */
    zip: string;
    /**
     * @description User identifier path. /users/{userId}
     */
    readonly userId: string & ;
    /**
     * @description Product identifier path. /products/{productId}
     */
    readonly productId: string & ;
    /**
     * @description API identifier path. /apis/{apiId}
     */
    apiId: string;
    /**
     * @description Operation identifier path. /apis/{apiId}/operations/{operationId}
     */
    operationId: string;
    /**
     * @description API region identifier.
     */
    apiRegion: string;
    /**
     * @description Subscription identifier path. /subscriptions/{subscriptionId}
     */
    subscriptionId: string;
    /**
     * @description Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
     */
    callCountSuccess: int32;
    /**
     * @description Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
     */
    callCountBlocked: int32;
    /**
     * @description Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
     */
    callCountFailed: int32;
    /**
     * @description Number of other calls.
     */
    callCountOther: int32;
    /**
     * @description Total number of calls.
     */
    callCountTotal: int32;
    /**
     * @description Bandwidth consumed.
     */
    bandwidth: int64;
    /**
     * @description Number of times when content was served from cache policy.
     */
    cacheHitCount: int32;
    /**
     * @description Number of times content was fetched from backend.
     */
    cacheMissCount: int32;
    /**
     * @description Average time it took to process request.
     */
    apiTimeAvg: double;
    /**
     * @description Minimum time it took to process request.
     */
    apiTimeMin: double;
    /**
     * @description Maximum time it took to process request.
     */
    apiTimeMax: double;
    /**
     * @description Average time it took to process request on backend.
     */
    serviceTimeAvg: double;
    /**
     * @description Minimum time it took to process request on backend.
     */
    serviceTimeMin: double;
    /**
     * @description Maximum time it took to process request on backend.
     */
    serviceTimeMax: double;
}
