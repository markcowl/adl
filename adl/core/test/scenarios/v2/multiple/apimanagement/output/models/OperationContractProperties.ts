import { OperationEntityBaseContract } from './OperationEntityBaseContract';
/**
 * 
 * @description Operation Contract Properties
 */
export interface OperationContractProperties extends OperationEntityBaseContract {
    /**
     * 
     * @description Operation Name.
     */
    displayName?: any;
    /**
     * 
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    method?: any;
    /**
     * 
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    urlTemplate?: any;
}
