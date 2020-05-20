
/**
 * @description Operation Entity contract Properties.
 */
export interface OperationTagResourceContractProperties {
    /**
     * @description Identifier of the operation in form /operations/{operationId}.
     */
    id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Operation name.
     */
    readonly name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Api Name.
     */
    readonly apiName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Api Revision.
     */
    readonly apiRevision: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Api Version.
     */
    readonly apiVersion: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Operation Description.
     */
    readonly description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
