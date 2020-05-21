import { RecipientEmailContractProperties } from './RecipientEmailContractProperties';
import { Resource } from './Resource';
/**
 * @description Recipient Email details.
 */
export interface RecipientEmailContract extends Resource {
    /**
     * @description Recipient Email contract properties.
     */
    properties: RecipientEmailContractProperties;
}
