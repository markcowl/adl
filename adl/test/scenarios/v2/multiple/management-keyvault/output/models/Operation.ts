import { OperationProperties } from './OperationProperties';
/**
 * @description Key Vault REST API operation definition.
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     */
    name: any;
    /**
     * @description Display metadata associated with the operation.
     */
    display: {
        /**
         * @description Service provider: Microsoft Key Vault.
         */
        provider: any;
        /**
         * @description Resource on which the operation is performed etc.
         */
        resource: any;
        /**
         * @description Type of operation: get, read, delete, etc.
         */
        operation: any;
        /**
         * @description Description of operation.
         */
        description: any;
    };
    /**
     * @description The origin of operations.
     */
    origin: any;
    /**
     * @description Properties of operation, include metric specifications.
     * @clientName OperationProperties
     */
    properties: OperationProperties;
}
