import { Resource } from './Resource';
import { GroupContractProperties } from './GroupContractProperties';
/** @since 2019-12-01 */
export interface GroupContract extends Resource {
    /** @since 2019-12-01 */
    properties: GroupContractProperties;
}
