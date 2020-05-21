import { OperationContractProperties } from './OperationContractProperties';
import { Resource } from './Resource';
/**
 * @description Api Operation details.
 */
export interface OperationContract extends Resource {
    /**
     * @description Properties of the Operation Contract.
     */
    properties: OperationContractProperties;
}
