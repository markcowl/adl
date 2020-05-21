import { GroupContractProperties } from './GroupContractProperties';
import { Resource } from './Resource';
/**
 * @description Contract details.
 */
export interface GroupContract extends Resource {
    /**
     * @description Group entity contract properties.
     */
    properties: GroupContractProperties;
}
