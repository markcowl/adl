import { IssueCommentContract } from './IssueCommentContract';
/**
 * @description Paged Issue Comment list representation.
 */
export interface IssueCommentCollection {
    /**
     * @description Issue Comment values.
     */
    readonly value: Array<IssueCommentContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
