import { Resource } from './Resource';
import { SubscriptionContractProperties } from './SubscriptionContractProperties';
/**
 * 
 * @description Subscription details.
 */
export interface SubscriptionContract extends Resource {
    /**
     * 
     * @description Subscription contract properties.
     */
    properties: SubscriptionContractProperties;
}
