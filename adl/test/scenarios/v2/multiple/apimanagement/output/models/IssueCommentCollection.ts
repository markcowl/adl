import { IssueCommentContract } from './IssueCommentContract';
/** @since 2019-12-01 */
export interface IssueCommentCollection {
    /** @since 2019-12-01 */
    readonly value: Array<IssueCommentContract> & ;
    /** @since 2019-12-01 */
    readonly nextLink: string & ;
}
