import { Resource } from './Resource';
import { UserContractProperties } from './UserContractProperties';
/**
 * @description User details.
 * @since 2019-12-01
 */
export interface UserContract extends Resource {
    /**
     * @description User entity contract properties.
     * @since 2019-12-01
     */
    properties: UserContractProperties;
}
