import { OperationEntityBaseContract } from './OperationEntityBaseContract';
/** @since 2019-12-01 */
export interface OperationUpdateContractProperties extends OperationEntityBaseContract {
    /** @since 2019-12-01 */
    displayName: string & MaxLength<300> & MinLength<1>;
    /** @since 2019-12-01 */
    method: string;
    /** @since 2019-12-01 */
    urlTemplate: string & MaxLength<1000> & MinLength<1>;
}
