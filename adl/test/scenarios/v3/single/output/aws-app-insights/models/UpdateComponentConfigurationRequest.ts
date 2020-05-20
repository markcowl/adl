import { Tier } from '../enums/Tier';
/**
 * UpdateComponentConfigurationRequest
 */
export interface UpdateComponentConfigurationRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The name of the component.
     */
    ComponentName?: string;
    /**
     * @description Indicates whether the application component is monitored.
     */
    Monitor: boolean;
    /**
     * @description The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>DOT_NET_CORE</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.
     */
    Tier: Tier;
    /**
     * @description The configuration settings of the component. The value is the escaped JSON of the configuration. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>. You can send a request to <code>DescribeComponentConfigurationRecommendation</code> to see the recommended configuration for a component. For the complete format of the component configuration file, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.
     */
    ComponentConfiguration: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
