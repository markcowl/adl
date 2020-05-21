import { RecipientEmailContract } from './RecipientEmailContract';
/**
 * @description Paged Recipient User list representation.
 */
export interface RecipientEmailCollection {
    /**
     * @description Page values.
     */
    value: Array<RecipientEmailContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
