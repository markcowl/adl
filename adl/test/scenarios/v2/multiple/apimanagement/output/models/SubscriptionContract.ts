import { Resource } from './Resource';
import { SubscriptionContractProperties } from './SubscriptionContractProperties';
/** @since 2019-12-01 */
export interface SubscriptionContract extends Resource {
    /** @since 2019-12-01 */
    properties: SubscriptionContractProperties;
}
