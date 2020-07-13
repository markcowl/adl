import { RedisFirewallRule } from './RedisFirewallRule';
/**
 * @description The response of list firewall rules Redis operation.
 * @since 2018-03-01
 */
export interface RedisFirewallRuleListResult {
    /**
     * @description Results of the list firewall rules operation.
     * @since 2018-03-01
     */
    value?: Array<RedisFirewallRule>;
    /**
     * @description Link for next page of results.
     * @since 2018-03-01
     */
    readonly nextLink?: string;
}
