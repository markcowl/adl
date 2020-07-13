import { RedisFirewallRuleProperties } from "./RedisFirewallRuleProperties";
import { ProxyResource } from "./ProxyResource";
/**
 * @description A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
 * @since 2018-03-01
 */
export interface RedisFirewallRule extends ProxyResource {
    /**
     * @description redis cache firewall rule properties
     * @since 2018-03-01
     */
    properties: RedisFirewallRuleProperties;
}
