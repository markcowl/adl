import { IssueContract } from './IssueContract';
/** @since 2019-12-01 */
export interface IssueCollection {
    /** @since 2019-12-01 */
    readonly value: Array<IssueContract> & ;
    /** @since 2019-12-01 */
    readonly nextLink: string & ;
}
