import { OperationProperties } from './OperationProperties';
/**
 * @description Key Vault REST API operation definition.
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Display metadata associated with the operation.
     */
    display: {
        /**
         * @description Service provider: Microsoft Key Vault.
         */
        provider: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description Resource on which the operation is performed etc.
         */
        resource: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description Type of operation: get, read, delete, etc.
         */
        operation: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        /**
         * @description Description of operation.
         */
        description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    };
    /**
     * @description The origin of operations.
     */
    origin: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Properties of operation, include metric specifications.
     * @clientName OperationProperties
     */
    properties: OperationProperties;
}
