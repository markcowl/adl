import { Resource } from './Resource';
import { IssueCommentContractProperties } from './IssueCommentContractProperties';
/**
 * @description Issue Comment Contract details.
 * @since 2019-12-01
 */
export interface IssueCommentContract extends Resource {
    /**
     * @description Properties of the Issue Comment.
     * @since 2019-12-01
     */
    properties: IssueCommentContractProperties;
}
