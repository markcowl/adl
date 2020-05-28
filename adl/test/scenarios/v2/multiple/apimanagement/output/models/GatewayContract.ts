import { Resource } from './Resource';
import { GatewayContractProperties } from './GatewayContractProperties';
/**
 * @description Gateway details.
 * @since 2019-12-01
 */
export interface GatewayContract extends Resource {
    /**
     * @description Gateway details.
     * @since 2019-12-01
     */
    properties: GatewayContractProperties;
}
