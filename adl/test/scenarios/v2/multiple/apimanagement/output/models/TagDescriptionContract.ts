import { Resource } from './Resource';
import { TagDescriptionContractProperties } from './TagDescriptionContractProperties';
/**
 * @description Contract details.
 */
export interface TagDescriptionContract extends Resource {
    /**
     * @description TagDescription entity contract properties.
     */
    properties: TagDescriptionContractProperties;
}
