import { Resource } from './Resource';
import { GroupContractProperties } from './GroupContractProperties';
/**
 * @description Contract details.
 * @since 2019-12-01
 */
export interface GroupContract extends Resource {
    /**
     * @description Group entity contract properties.
     * @since 2019-12-01
     */
    properties: GroupContractProperties;
}
