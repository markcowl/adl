import { OperationProperties } from './OperationProperties';
/**
 * @description Key Vault REST API operation definition.
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     */
    name: string;
    /**
     * @description Display metadata associated with the operation.
     */
    display: {
        /**
         * @description Service provider: Microsoft Key Vault.
         */
        provider: string;
        /**
         * @description Resource on which the operation is performed etc.
         */
        resource: string;
        /**
         * @description Type of operation: get, read, delete, etc.
         */
        operation: string;
        /**
         * @description Description of operation.
         */
        description: string;
    };
    /**
     * @description The origin of operations.
     */
    origin: string;
    /**
     * @description Properties of operation, include metric specifications.
     * @clientName OperationProperties
     */
    properties: OperationProperties;
}
