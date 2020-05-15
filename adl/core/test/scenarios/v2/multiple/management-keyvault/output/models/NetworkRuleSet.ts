
/**
 * 
 * @description A set of rules governing the network accessibility of a vault.
 */
export interface NetworkRuleSet {
    /**
     * 
     * @description Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
     */
    bypass: NetworkRuleBypassOptions;
    /**
     * 
     * @description The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
     */
    defaultAction: NetworkRuleAction;
    /**
     * 
     * @description The list of IP address rules.
     */
    ipRules: any;
    /**
     * 
     * @description The list of virtual network rules.
     */
    virtualNetworkRules: any;
}
