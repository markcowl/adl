import { RedisFirewallRuleProperties } from "./RedisFirewallRuleProperties";
/**
 * @description Parameters required for creating a firewall rule on redis cache.
 * @since 2018-03-01
 */
export interface RedisFirewallRuleCreateParameters {
    /**
     * @description Properties required to create a firewall rule .
     * @since 2018-03-01
     */
    properties: RedisFirewallRuleProperties;
}
