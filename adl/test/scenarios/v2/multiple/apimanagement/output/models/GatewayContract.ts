import { Resource } from './Resource';
import { GatewayContractProperties } from './GatewayContractProperties';
/** @since 2019-12-01 */
export interface GatewayContract extends Resource {
    /** @since 2019-12-01 */
    properties: GatewayContractProperties;
}
