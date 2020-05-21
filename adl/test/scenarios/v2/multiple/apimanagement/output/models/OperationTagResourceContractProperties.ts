
/**
 * @description Operation Entity contract Properties.
 */
export interface OperationTagResourceContractProperties {
    /**
     * @description Identifier of the operation in form /operations/{operationId}.
     */
    id: string;
    /**
     * @description Operation name.
     */
    readonly name: string & ;
    /**
     * @description Api Name.
     */
    readonly apiName: string & ;
    /**
     * @description Api Revision.
     */
    readonly apiRevision: string & ;
    /**
     * @description Api Version.
     */
    readonly apiVersion: string & ;
    /**
     * @description Operation Description.
     */
    readonly description: string & ;
    /**
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: string & ;
    /**
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: string & ;
}
