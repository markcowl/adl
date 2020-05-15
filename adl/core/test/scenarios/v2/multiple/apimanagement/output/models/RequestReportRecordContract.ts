
/**
 * 
 * @description Request Report data.
 */
export interface RequestReportRecordContract {
    /**
     * 
     * @description API identifier path. /apis/{apiId}
     */
    apiId: any;
    /**
     * 
     * @description Operation identifier path. /apis/{apiId}/operations/{operationId}
     */
    operationId: any;
    /**
     * 
     * @description Product identifier path. /products/{productId}
     */
    readonly productId: any;
    /**
     * 
     * @description User identifier path. /users/{userId}
     */
    readonly userId: any;
    /**
     * 
     * @description The HTTP method associated with this request..
     */
    method: any;
    /**
     * 
     * @description The full URL associated with this request.
     */
    url: any;
    /**
     * 
     * @description The client IP address associated with this request.
     */
    ipAddress: any;
    /**
     * 
     * @description The HTTP status code received by the gateway as a result of forwarding this request to the backend.
     */
    backendResponseCode: any;
    /**
     * 
     * @description The HTTP status code returned by the gateway.
     */
    responseCode: any;
    /**
     * 
     * @description The size of the response returned by the gateway.
     */
    responseSize: any;
    /**
     * 
     * @description The date and time when this request was received by the gateway in ISO 8601 format.
     */
    timestamp: any;
    /**
     * 
     * @description Specifies if response cache was involved in generating the response. If the value is none, the cache was not used. If the value is hit, cached response was returned. If the value is miss, the cache was used but lookup resulted in a miss and request was fulfilled by the backend.
     */
    cache: any;
    /**
     * 
     * @description The total time it took to process this request.
     */
    apiTime: any;
    /**
     * 
     * @description he time it took to forward this request to the backend and get the response back.
     */
    serviceTime: any;
    /**
     * 
     * @description Azure region where the gateway that processed this request is located.
     */
    apiRegion: any;
    /**
     * 
     * @description Subscription identifier path. /subscriptions/{subscriptionId}
     */
    subscriptionId: any;
    /**
     * 
     * @description Request Identifier.
     */
    requestId: any;
    /**
     * 
     * @description The size of this request..
     */
    requestSize: any;
}
