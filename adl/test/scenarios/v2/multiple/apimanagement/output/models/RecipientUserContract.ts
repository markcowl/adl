import { RecipientUsersContractProperties } from './RecipientUsersContractProperties';
import { Resource } from './Resource';
/**
 * @description Recipient User details.
 */
export interface RecipientUserContract extends Resource {
    /**
     * @description Recipient User entity contract properties.
     */
    properties: RecipientUsersContractProperties;
}
