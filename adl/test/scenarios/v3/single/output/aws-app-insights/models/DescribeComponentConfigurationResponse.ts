import { Tier } from '../enums/Tier';
export interface DescribeComponentConfigurationResponse {
    /**
     * @description Indicates whether the application component is monitored.
     */
    Monitor: boolean;
    /**
     * @description The tier of the application component. Supported tiers include <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>
     */
    Tier: Tier;
    /**
     * @description The configuration settings of the component. The value is the escaped JSON of the configuration.
     */
    ComponentConfiguration: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
