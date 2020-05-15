import { Resource } from './Resource';
import { RecipientUsersContractProperties } from './RecipientUsersContractProperties';
/**
 * 
 * @description Recipient User details.
 */
export interface RecipientUserContract extends Resource {
    /**
     * 
     * @description Recipient User entity contract properties.
     */
    properties: RecipientUsersContractProperties;
}
