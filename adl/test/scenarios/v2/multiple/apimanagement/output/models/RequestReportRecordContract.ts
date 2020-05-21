
/**
 * @description Request Report data.
 */
export interface RequestReportRecordContract {
    /**
     * @description API identifier path. /apis/{apiId}
     */
    apiId: string;
    /**
     * @description Operation identifier path. /apis/{apiId}/operations/{operationId}
     */
    operationId: string;
    /**
     * @description Product identifier path. /products/{productId}
     */
    readonly productId: string & ;
    /**
     * @description User identifier path. /users/{userId}
     */
    readonly userId: string & ;
    /**
     * @description The HTTP method associated with this request..
     */
    method: string;
    /**
     * @description The full URL associated with this request.
     */
    url: string;
    /**
     * @description The client IP address associated with this request.
     */
    ipAddress: string;
    /**
     * @description The HTTP status code received by the gateway as a result of forwarding this request to the backend.
     */
    backendResponseCode: string;
    /**
     * @description The HTTP status code returned by the gateway.
     */
    responseCode: int32;
    /**
     * @description The size of the response returned by the gateway.
     */
    responseSize: int32;
    /**
     * @description The date and time when this request was received by the gateway in ISO 8601 format.
     */
    timestamp: dateTime;
    /**
     * @description Specifies if response cache was involved in generating the response. If the value is none, the cache was not used. If the value is hit, cached response was returned. If the value is miss, the cache was used but lookup resulted in a miss and request was fulfilled by the backend.
     */
    cache: string;
    /**
     * @description The total time it took to process this request.
     */
    apiTime: double;
    /**
     * @description he time it took to forward this request to the backend and get the response back.
     */
    serviceTime: double;
    /**
     * @description Azure region where the gateway that processed this request is located.
     */
    apiRegion: string;
    /**
     * @description Subscription identifier path. /subscriptions/{subscriptionId}
     */
    subscriptionId: string;
    /**
     * @description Request Identifier.
     */
    requestId: string;
    /**
     * @description The size of this request..
     */
    requestSize: int32;
}
