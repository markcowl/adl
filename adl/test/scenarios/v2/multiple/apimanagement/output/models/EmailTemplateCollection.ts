import { EmailTemplateContract } from './EmailTemplateContract';
/**
 * @description Paged email template list representation.
 */
export interface EmailTemplateCollection {
    /**
     * @description Page values.
     */
    value: Array<EmailTemplateContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
