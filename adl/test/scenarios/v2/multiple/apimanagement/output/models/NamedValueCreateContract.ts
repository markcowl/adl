import { NamedValueCreateContractProperties } from './NamedValueCreateContractProperties';
import { Resource } from './Resource';
/**
 * @description NamedValue details.
 */
export interface NamedValueCreateContract extends Resource {
    /**
     * @description NamedValue entity contract properties for PUT operation.
     */
    properties: NamedValueCreateContractProperties;
}
