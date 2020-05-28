import { Resource } from './Resource';
import { RecipientEmailContractProperties } from './RecipientEmailContractProperties';
/**
 * @description Recipient Email details.
 * @since 2019-12-01
 */
export interface RecipientEmailContract extends Resource {
    /**
     * @description Recipient Email contract properties.
     * @since 2019-12-01
     */
    properties: RecipientEmailContractProperties;
}
