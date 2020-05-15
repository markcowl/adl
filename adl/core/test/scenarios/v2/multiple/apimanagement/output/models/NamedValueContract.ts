import { Resource } from './Resource';
import { NamedValueContractProperties } from './NamedValueContractProperties';
/**
 * 
 * @description NamedValue details.
 */
export interface NamedValueContract extends Resource {
    /**
     * 
     * @description NamedValue entity contract properties.
     */
    properties: NamedValueContractProperties;
}
