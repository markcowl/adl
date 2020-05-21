import { IssueContract } from './IssueContract';
/**
 * @description Paged Issue list representation.
 */
export interface IssueCollection {
    /**
     * @description Issue values.
     */
    readonly value: Array<IssueContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
