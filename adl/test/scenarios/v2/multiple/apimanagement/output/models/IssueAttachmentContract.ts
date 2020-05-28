import { Resource } from './Resource';
import { IssueAttachmentContractProperties } from './IssueAttachmentContractProperties';
/**
 * @description Issue Attachment Contract details.
 * @since 2019-12-01
 */
export interface IssueAttachmentContract extends Resource {
    /**
     * @description Properties of the Issue Attachment.
     * @since 2019-12-01
     */
    properties: IssueAttachmentContractProperties;
}
