import { IPRule } from './IPRule';
import { VirtualNetworkRule } from './VirtualNetworkRule';
/** @since 2019-09-01 */
export interface NetworkRuleSet {
    /** @since 2019-09-01 */
    bypass: NetworkRuleBypassOptions;
    /** @since 2019-09-01 */
    defaultAction: NetworkRuleAction;
    /** @since 2019-09-01 */
    ipRules: Array<IPRule>;
    /** @since 2019-09-01 */
    virtualNetworkRules: Array<VirtualNetworkRule>;
}
