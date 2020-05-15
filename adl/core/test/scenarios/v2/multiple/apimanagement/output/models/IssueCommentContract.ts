import { Resource } from './Resource';
import { IssueCommentContractProperties } from './IssueCommentContractProperties';
/**
 * 
 * @description Issue Comment Contract details.
 */
export interface IssueCommentContract extends Resource {
    /**
     * 
     * @description Properties of the Issue Comment.
     */
    properties: IssueCommentContractProperties;
}
