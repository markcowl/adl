import { NamedValueContractProperties } from './NamedValueContractProperties';
import { Resource } from './Resource';
/**
 * @description NamedValue details.
 */
export interface NamedValueContract extends Resource {
    /**
     * @description NamedValue entity contract properties.
     */
    properties: NamedValueContractProperties;
}
