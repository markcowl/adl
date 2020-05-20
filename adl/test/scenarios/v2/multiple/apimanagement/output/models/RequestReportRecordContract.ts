
/**
 * @description Request Report data.
 */
export interface RequestReportRecordContract {
    /**
     * @description API identifier path. /apis/{apiId}
     */
    apiId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Operation identifier path. /apis/{apiId}/operations/{operationId}
     */
    operationId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Product identifier path. /products/{productId}
     */
    readonly productId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description User identifier path. /users/{userId}
     */
    readonly userId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The HTTP method associated with this request..
     */
    method: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The full URL associated with this request.
     */
    url: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The client IP address associated with this request.
     */
    ipAddress: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The HTTP status code received by the gateway as a result of forwarding this request to the backend.
     */
    backendResponseCode: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The HTTP status code returned by the gateway.
     */
    responseCode: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The size of the response returned by the gateway.
     */
    responseSize: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The date and time when this request was received by the gateway in ISO 8601 format.
     */
    timestamp: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Specifies if response cache was involved in generating the response. If the value is none, the cache was not used. If the value is hit, cached response was returned. If the value is miss, the cache was used but lookup resulted in a miss and request was fulfilled by the backend.
     */
    cache: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The total time it took to process this request.
     */
    apiTime: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description he time it took to forward this request to the backend and get the response back.
     */
    serviceTime: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Azure region where the gateway that processed this request is located.
     */
    apiRegion: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Subscription identifier path. /subscriptions/{subscriptionId}
     */
    subscriptionId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Request Identifier.
     */
    requestId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The size of this request..
     */
    requestSize: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
