
/**
 * @description Parameters supplied to the Create subscription operation.
 */
export interface SubscriptionCreateParameterProperties {
    /**
     * @description User (user id path) for whom subscription is being created in form /users/{userId}
     */
    ownerId: string;
    /**
     * @description Scope like /products/{productId} or /apis or /apis/{apiId}.
     */
    scope?: string;
    /**
     * @description Subscription name.
     */
    displayName?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Primary subscription key. If not specified during request key will be generated automatically.
     */
    primaryKey: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Secondary subscription key. If not specified during request key will be generated automatically.
     */
    secondaryKey: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    state: SubscriptionState;
    /**
     * @description Determines whether tracing can be enabled
     */
    allowTracing: boolean;
}
