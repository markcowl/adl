import { GatewayHostnameConfigurationContract } from './GatewayHostnameConfigurationContract';
/**
 * @description Paged Gateway hostname configuration list representation.
 */
export interface GatewayHostnameConfigurationCollection {
    /**
     * @description Page values.
     */
    readonly value: Array<GatewayHostnameConfigurationContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
