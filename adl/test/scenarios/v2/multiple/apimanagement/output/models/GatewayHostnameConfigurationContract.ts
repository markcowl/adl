import { Resource } from './Resource';
import { GatewayHostnameConfigurationContractProperties } from './GatewayHostnameConfigurationContractProperties';
/**
 * @description Gateway hostname configuration details.
 * @since 2019-12-01
 */
export interface GatewayHostnameConfigurationContract extends Resource {
    /**
     * @description Gateway hostname configuration details.
     * @since 2019-12-01
     */
    properties: GatewayHostnameConfigurationContractProperties;
}
