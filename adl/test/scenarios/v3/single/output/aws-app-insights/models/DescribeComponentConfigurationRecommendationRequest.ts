
/** DescribeComponentConfigurationRecommendationRequest */
export interface DescribeComponentConfigurationRecommendationRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: any;
    /**
     * @description The name of the component.
     */
    ComponentName?: any;
    /**
     * @description The tier of the application component. Supported tiers include <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.
     */
    Tier?: Tier;
}
