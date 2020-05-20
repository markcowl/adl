import { OperationEntityBaseContract } from './OperationEntityBaseContract';
/**
 * @description Operation Contract Properties
 */
export interface OperationContractProperties extends OperationEntityBaseContract {
    /**
     * @description Operation Name.
     */
    displayName?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    method?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    urlTemplate?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
