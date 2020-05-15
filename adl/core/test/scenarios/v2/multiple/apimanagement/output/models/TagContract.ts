import { Resource } from './Resource';
import { TagContractProperties } from './TagContractProperties';
/**
 * 
 * @description Tag Contract details.
 */
export interface TagContract extends Resource {
    /**
     * 
     * @description Tag entity contract properties.
     */
    properties: TagContractProperties;
}
