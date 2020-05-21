
/**
 * @description Log of the entity being created, updated or deleted.
 */
export interface OperationResultLogItemContract {
    /**
     * @description The type of entity contract.
     */
    objectType: string;
    /**
     * @description Action like create/update/delete.
     */
    action: string;
    /**
     * @description Identifier of the entity being created/updated/deleted.
     */
    objectKey: string;
}
