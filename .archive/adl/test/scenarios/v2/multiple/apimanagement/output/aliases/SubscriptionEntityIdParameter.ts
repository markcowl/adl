
/** Subscription entity Identifier. The entity represents the association between a user and a product in API Management. */
export type SubscriptionEntityIdParameter = Path<string & MaxLength<256> & RegularExpression<"^[^*#&+:<>?]+$">, "sid">;
