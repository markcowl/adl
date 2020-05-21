import { IssueAttachmentContract } from './IssueAttachmentContract';
/**
 * @description Paged Issue Attachment list representation.
 */
export interface IssueAttachmentCollection {
    /**
     * @description Issue Attachment values.
     */
    readonly value: Array<IssueAttachmentContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
