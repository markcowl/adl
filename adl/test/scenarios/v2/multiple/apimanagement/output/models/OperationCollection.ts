import { OperationContract } from './OperationContract';
/** @since 2019-12-01 */
export interface OperationCollection {
    /** @since 2019-12-01 */
    readonly value: Array<OperationContract> & ;
    /** @since 2019-12-01 */
    readonly nextLink: string & ;
}
