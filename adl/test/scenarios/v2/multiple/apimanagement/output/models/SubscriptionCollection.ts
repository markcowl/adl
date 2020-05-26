import { SubscriptionContract } from './SubscriptionContract';
/** @since 2019-12-01 */
export interface SubscriptionCollection {
    /** @since 2019-12-01 */
    value: Array<SubscriptionContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}
