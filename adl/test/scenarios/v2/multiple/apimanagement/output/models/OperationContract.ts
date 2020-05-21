import { Resource } from './Resource';
import { OperationContractProperties } from './OperationContractProperties';
/**
 * @description Api Operation details.
 */
export interface OperationContract extends Resource {
    /**
     * @description Properties of the Operation Contract.
     */
    properties: OperationContractProperties;
}
