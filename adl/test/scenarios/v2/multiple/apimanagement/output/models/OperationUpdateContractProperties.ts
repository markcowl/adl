import { OperationEntityBaseContract } from './OperationEntityBaseContract';
/**
 * @description Operation Update Contract Properties.
 */
export interface OperationUpdateContractProperties extends OperationEntityBaseContract {
    /**
     * @description Operation Name.
     */
    displayName: string & MaxLength<300> & MinLength<1>;
    /**
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    method: string;
    /**
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    urlTemplate: string & MaxLength<1000> & MinLength<1>;
}
