import { Resource } from './Resource';
import { RecipientEmailContractProperties } from './RecipientEmailContractProperties';
/**
 * @description Recipient Email details.
 */
export interface RecipientEmailContract extends Resource {
    /**
     * @description Recipient Email contract properties.
     */
    properties: RecipientEmailContractProperties;
}
