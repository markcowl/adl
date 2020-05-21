
/**
 * @description Issue Attachment contract Properties.
 */
export interface IssueAttachmentContractProperties {
    /**
     * @description Filename by which the binary data will be saved.
     */
    title?: string;
    /**
     * @description Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    contentFormat?: string;
    /**
     * @description An HTTP link or Base64-encoded binary data.
     */
    content?: string;
}
