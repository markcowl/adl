import { ResourceLocationDataContract } from './ResourceLocationDataContract';
/**
 * @description Properties of the Gateway contract.
 */
export interface GatewayContractProperties {
    /**
     * @description Gateway location.
     */
    locationData: ResourceLocationDataContract;
    /**
     * @description Gateway description
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
