import { OperationContract } from './OperationContract';
/**
 * @description Paged Operation list representation.
 */
export interface OperationCollection {
    /**
     * @description Page values.
     */
    readonly value: Array<OperationContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
