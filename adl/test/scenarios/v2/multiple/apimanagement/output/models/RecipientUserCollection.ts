import { RecipientUserContract } from './RecipientUserContract';
/**
 * @description Paged Recipient User list representation.
 */
export interface RecipientUserCollection {
    /**
     * @description Page values.
     */
    value: Array<RecipientUserContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
