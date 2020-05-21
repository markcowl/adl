import { SubscriptionContract } from './SubscriptionContract';
/**
 * @description Paged Subscriptions list representation.
 */
export interface SubscriptionCollection {
    /**
     * @description Page values.
     */
    value: Array<SubscriptionContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
