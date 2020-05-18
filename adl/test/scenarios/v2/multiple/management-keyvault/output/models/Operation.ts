import { object_191 } from '../anonymous';
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
    display: object_191;
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
