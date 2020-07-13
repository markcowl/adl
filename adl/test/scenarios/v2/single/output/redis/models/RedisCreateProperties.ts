import { Sku } from './Sku';
import { RedisCommonProperties } from './RedisCommonProperties';
/**
 * @description Properties supplied to Create Redis operation.
 * @since 2018-03-01
 */
export interface RedisCreateProperties extends RedisCommonProperties {
    /**
     * @description The SKU of the Redis cache to deploy.
     * @since 2018-03-01
     */
    sku: Sku;
    /**
     * @description The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
     * @since 2018-03-01
     */
    subnetId?: string & RegularExpression<'^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork|Network)/virtualNetworks/[^/]*/subnets/[^/]*$'>;
    /**
     * @description Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
     * @since 2018-03-01
     */
    staticIP?: string & RegularExpression<'^\d+\.\d+\.\d+\.\d+$'>;
}
