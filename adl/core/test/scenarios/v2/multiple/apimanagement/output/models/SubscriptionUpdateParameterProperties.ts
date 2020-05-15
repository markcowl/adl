
/**
 * 
 * @description Parameters supplied to the Update subscription operation.
 */
export interface SubscriptionUpdateParameterProperties {
    /**
     * 
     * @description User identifier path: /users/{userId}
     */
    ownerId: any;
    /**
     * 
     * @description Scope like /products/{productId} or /apis or /apis/{apiId}
     */
    scope: any;
    /**
     * 
     * @description Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    expirationDate: any;
    /**
     * 
     * @description Subscription name.
     */
    displayName: any;
    /**
     * 
     * @description Primary subscription key.
     */
    primaryKey: any;
    /**
     * 
     * @description Secondary subscription key.
     */
    secondaryKey: any;
    /**
     * 
     * @description Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    state: SubscriptionState;
    /**
     * 
     * @description Comments describing subscription state change by the administrator.
     */
    stateComment: any;
    /**
     * 
     * @description Determines whether tracing can be enabled
     */
    allowTracing: any;
}
