
/**
 * @description Specifies a range of IP addresses permitted to connect to the cache
 * @since 2018-03-01
 */
export interface RedisFirewallRuleProperties {
    /**
     * @description lowest IP address included in the range
     * @since 2018-03-01
     */
    startIP: string;
    /**
     * @description highest IP address included in the range
     * @since 2018-03-01
     */
    endIP: string;
}
