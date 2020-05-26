import { Resource } from './Resource';
import { OperationContractProperties } from './OperationContractProperties';
/** @since 2019-12-01 */
export interface OperationContract extends Resource {
    /** @since 2019-12-01 */
    properties: OperationContractProperties;
}
