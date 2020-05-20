import { object_179 } from './object_179';
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
    display: object_179;
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
