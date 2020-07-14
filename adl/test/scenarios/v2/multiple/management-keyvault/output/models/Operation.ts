import { OperationProperties } from "./OperationProperties";
/**
 * @description Key Vault REST API operation definition.
 * @since 2019-09-01
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     * @since 2019-09-01
     */
    name?: string;
    /**
     * @description Display metadata associated with the operation.
     * @since 2019-09-01
     */
    display?: {
        provider?: string;
        resource?: string;
        operation?: string;
        description?: string;
    };
    /**
     * @description The origin of operations.
     * @since 2019-09-01
     */
    origin?: string;
    /**
     * @description Properties of operation, include metric specifications.
     * @clientName OperationProperties
     * @since 2019-09-01
     */
    properties?: OperationProperties;
}
