
/**
 * @description Issue Comment contract Properties.
 */
export interface IssueCommentContractProperties {
    /**
     * @description Comment text.
     */
    text?: string;
    /**
     * @description Date and time when the comment was created.
     */
    createdDate: dateTime;
    /**
     * @description A resource identifier for the user who left the comment.
     */
    userId?: string;
}
