import { Resource } from './Resource';
import { IssueAttachmentContractProperties } from './IssueAttachmentContractProperties';
/**
 * 
 * @description Issue Attachment Contract details.
 */
export interface IssueAttachmentContract extends Resource {
    /**
     * 
     * @description Properties of the Issue Attachment.
     */
    properties: IssueAttachmentContractProperties;
}
