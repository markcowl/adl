import { IssueCommentContractProperties } from './IssueCommentContractProperties';
import { Resource } from './Resource';
/**
 * @description Issue Comment Contract details.
 */
export interface IssueCommentContract extends Resource {
    /**
     * @description Properties of the Issue Comment.
     */
    properties: IssueCommentContractProperties;
}
