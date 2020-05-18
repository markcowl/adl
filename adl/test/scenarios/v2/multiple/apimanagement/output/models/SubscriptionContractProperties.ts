
/**
 * @description Subscription details.
 */
export interface SubscriptionContractProperties {
    /**
     * @description The user resource identifier of the subscription owner. The value is a valid relative URL in the format of /users/{userId} where {userId} is a user identifier.
     */
    ownerId: any;
    /**
     * @description Scope like /products/{productId} or /apis or /apis/{apiId}.
     */
    scope?: any;
    /**
     * @description The name of the subscription, or null if the subscription has no name.
     */
    displayName: any;
    /**
     * @description Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    state?: SubscriptionState;
    /**
     * @description Subscription creation date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    readonly createdDate: any;
    /**
     * @description Subscription activation date. The setting is for audit purposes only and the subscription is not automatically activated. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    startDate: any;
    /**
     * @description Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    expirationDate: any;
    /**
     * @description Date when subscription was cancelled or expired. The setting is for audit purposes only and the subscription is not automatically cancelled. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    endDate: any;
    /**
     * @description Upcoming subscription expiration notification date. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    notificationDate: any;
    /**
     * @description Subscription primary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    primaryKey: any;
    /**
     * @description Subscription secondary key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    secondaryKey: any;
    /**
     * @description Optional subscription comment added by an administrator.
     */
    stateComment: any;
    /**
     * @description Determines whether tracing is enabled
     */
    allowTracing: any;
}
