
/**
 * @description Log of the entity being created, updated or deleted.
 */
export interface OperationResultLogItemContract {
    /**
     * @description The type of entity contract.
     */
    objectType: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Action like create/update/delete.
     */
    action: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Identifier of the entity being created/updated/deleted.
     */
    objectKey: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
