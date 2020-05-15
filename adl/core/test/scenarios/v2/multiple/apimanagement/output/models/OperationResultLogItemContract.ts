
/**
 * 
 * @description Log of the entity being created, updated or deleted.
 */
export interface OperationResultLogItemContract {
    /**
     * 
     * @description The type of entity contract.
     */
    objectType: any;
    /**
     * 
     * @description Action like create/update/delete.
     */
    action: any;
    /**
     * 
     * @description Identifier of the entity being created/updated/deleted.
     */
    objectKey: any;
}
