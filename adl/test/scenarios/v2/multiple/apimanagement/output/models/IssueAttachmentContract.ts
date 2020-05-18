import { IssueAttachmentContractProperties } from './IssueAttachmentContractProperties';
import { Resource } from './Resource';
/**
 * @description Issue Attachment Contract details.
 */
export interface IssueAttachmentContract extends Resource {
    /**
     * @description Properties of the Issue Attachment.
     */
    properties: IssueAttachmentContractProperties;
}
