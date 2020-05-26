import { ResourceLocationDataContract } from './ResourceLocationDataContract';
/** @since 2019-12-01 */
export interface GatewayContractProperties {
    /** @since 2019-12-01 */
    locationData: ResourceLocationDataContract;
    /** @since 2019-12-01 */
    description: string & MaxLength<1000>;
}
