import { Resource } from './Resource';
import { SubscriptionContractProperties } from './SubscriptionContractProperties';
/**
 * @description Subscription details.
 * @since 2019-12-01
 */
export interface SubscriptionContract extends Resource {
    /**
     * @description Subscription contract properties.
     * @since 2019-12-01
     */
    properties: SubscriptionContractProperties;
}
