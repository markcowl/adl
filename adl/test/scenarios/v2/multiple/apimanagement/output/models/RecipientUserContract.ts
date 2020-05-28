import { Resource } from './Resource';
import { RecipientUsersContractProperties } from './RecipientUsersContractProperties';
/**
 * @description Recipient User details.
 * @since 2019-12-01
 */
export interface RecipientUserContract extends Resource {
    /**
     * @description Recipient User entity contract properties.
     * @since 2019-12-01
     */
    properties: RecipientUsersContractProperties;
}
