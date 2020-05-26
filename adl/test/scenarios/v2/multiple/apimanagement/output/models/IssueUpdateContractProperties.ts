import { IssueContractBaseProperties } from './IssueContractBaseProperties';
/** @since 2019-12-01 */
export interface IssueUpdateContractProperties extends IssueContractBaseProperties {
    /** @since 2019-12-01 */
    title: string;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    userId: string;
}
