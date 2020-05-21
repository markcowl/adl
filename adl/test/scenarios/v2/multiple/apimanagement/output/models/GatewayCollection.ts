import { GatewayContract } from './GatewayContract';
/**
 * @description Paged Gateway list representation.
 */
export interface GatewayCollection {
    /**
     * @description Page values.
     */
    readonly value: Array<GatewayContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
