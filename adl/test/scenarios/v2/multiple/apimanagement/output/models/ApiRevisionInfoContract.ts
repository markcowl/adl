import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
/** @since 2019-12-01 */
export interface ApiRevisionInfoContract {
    /** @since 2019-12-01 */
    sourceApiId: string;
    /** @since 2019-12-01 */
    apiVersionName: string & MaxLength<100>;
    /** @since 2019-12-01 */
    apiRevisionDescription: string & MaxLength<256>;
    /** @since 2019-12-01 */
    apiVersionSet: ApiVersionSetContractDetails;
}
