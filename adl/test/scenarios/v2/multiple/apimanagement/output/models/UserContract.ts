import { Resource } from './Resource';
import { UserContractProperties } from './UserContractProperties';
/** @since 2019-12-01 */
export interface UserContract extends Resource {
    /** @since 2019-12-01 */
    properties: UserContractProperties;
}
