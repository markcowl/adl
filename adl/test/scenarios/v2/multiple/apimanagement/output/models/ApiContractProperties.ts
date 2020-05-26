import { ApiEntityBaseContract } from './ApiEntityBaseContract';
import { Protocol } from '../enums/Protocol';
import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
/** @since 2019-12-01 */
export interface ApiContractProperties extends ApiEntityBaseContract {
    /** @since 2019-12-01 */
    sourceApiId: string;
    /** @since 2019-12-01 */
    displayName: string & MaxLength<300> & MinLength<1>;
    /** @since 2019-12-01 */
    serviceUrl: string & MaxLength<2000> & MinLength<0>;
    /** @since 2019-12-01 */
    path?: string & MaxLength<400> & MinLength<0>;
    /** @since 2019-12-01 */
    protocols: Array<Protocol>;
    /** @since 2019-12-01 */
    apiVersionSet: ApiVersionSetContractDetails;
}
