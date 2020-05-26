import { Resource } from './Resource';
import { IssueCommentContractProperties } from './IssueCommentContractProperties';
/** @since 2019-12-01 */
export interface IssueCommentContract extends Resource {
    /** @since 2019-12-01 */
    properties: IssueCommentContractProperties;
}
