
/**
 * 
 * @description Operation Entity contract Properties.
 */
export interface OperationTagResourceContractProperties {
    /**
     * 
     * @description Identifier of the operation in form /operations/{operationId}.
     */
    id: any;
    /**
     * 
     * @description Operation name.
     */
    readonly name: any;
    /**
     * 
     * @description Api Name.
     */
    readonly apiName: any;
    /**
     * 
     * @description Api Revision.
     */
    readonly apiRevision: any;
    /**
     * 
     * @description Api Version.
     */
    readonly apiVersion: any;
    /**
     * 
     * @description Operation Description.
     */
    readonly description: any;
    /**
     * 
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: any;
    /**
     * 
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: any;
}
