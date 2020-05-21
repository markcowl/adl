import { Resource } from './Resource';
import { GroupContractProperties } from './GroupContractProperties';
/**
 * @description Contract details.
 */
export interface GroupContract extends Resource {
    /**
     * @description Group entity contract properties.
     */
    properties: GroupContractProperties;
}
