import { Resource } from './Resource';
import { NamedValueCreateContractProperties } from './NamedValueCreateContractProperties';
/**
 * 
 * @description NamedValue details.
 */
export interface NamedValueCreateContract extends Resource {
    /**
     * 
     * @description NamedValue entity contract properties for PUT operation.
     */
    properties: NamedValueCreateContractProperties;
}
