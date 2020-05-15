import { Resource } from './Resource';
import { UserContractProperties } from './UserContractProperties';
/**
 * 
 * @description User details.
 */
export interface UserContract extends Resource {
    /**
     * 
     * @description User entity contract properties.
     */
    properties: UserContractProperties;
}
