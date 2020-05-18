
/**
 * @description Report data.
 */
export interface ReportRecordContract {
    /**
     * @description Name depending on report endpoint specifies product, API, operation or developer name.
     */
    name: any;
    /**
     * @description Start of aggregation period. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    timestamp: any;
    /**
     * @description Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).
     */
    interval: any;
    /**
     * @description Country to which this record data is related.
     */
    country: any;
    /**
     * @description Country region to which this record data is related.
     */
    region: any;
    /**
     * @description Zip code to which this record data is related.
     */
    zip: any;
    /**
     * @description User identifier path. /users/{userId}
     */
    readonly userId: any;
    /**
     * @description Product identifier path. /products/{productId}
     */
    readonly productId: any;
    /**
     * @description API identifier path. /apis/{apiId}
     */
    apiId: any;
    /**
     * @description Operation identifier path. /apis/{apiId}/operations/{operationId}
     */
    operationId: any;
    /**
     * @description API region identifier.
     */
    apiRegion: any;
    /**
     * @description Subscription identifier path. /subscriptions/{subscriptionId}
     */
    subscriptionId: any;
    /**
     * @description Number of successful calls. This includes calls returning HttpStatusCode <= 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect
     */
    callCountSuccess: any;
    /**
     * @description Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests
     */
    callCountBlocked: any;
    /**
     * @description Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600
     */
    callCountFailed: any;
    /**
     * @description Number of other calls.
     */
    callCountOther: any;
    /**
     * @description Total number of calls.
     */
    callCountTotal: any;
    /**
     * @description Bandwidth consumed.
     */
    bandwidth: any;
    /**
     * @description Number of times when content was served from cache policy.
     */
    cacheHitCount: any;
    /**
     * @description Number of times content was fetched from backend.
     */
    cacheMissCount: any;
    /**
     * @description Average time it took to process request.
     */
    apiTimeAvg: any;
    /**
     * @description Minimum time it took to process request.
     */
    apiTimeMin: any;
    /**
     * @description Maximum time it took to process request.
     */
    apiTimeMax: any;
    /**
     * @description Average time it took to process request on backend.
     */
    serviceTimeAvg: any;
    /**
     * @description Minimum time it took to process request on backend.
     */
    serviceTimeMin: any;
    /**
     * @description Maximum time it took to process request on backend.
     */
    serviceTimeMax: any;
}
