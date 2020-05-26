import { GatewayContract } from './GatewayContract';
/** @since 2019-12-01 */
export interface GatewayCollection {
    /** @since 2019-12-01 */
    readonly value: Array<GatewayContract> & ;
    /** @since 2019-12-01 */
    readonly nextLink: string & ;
}
