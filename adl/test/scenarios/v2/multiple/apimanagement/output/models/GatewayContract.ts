import { GatewayContractProperties } from './GatewayContractProperties';
import { Resource } from './Resource';
/**
 * @description Gateway details.
 */
export interface GatewayContract extends Resource {
    /**
     * @description Gateway details.
     */
    properties: GatewayContractProperties;
}
