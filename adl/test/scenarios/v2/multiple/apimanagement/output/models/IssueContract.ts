import { Resource } from './Resource';
import { IssueContractProperties } from './IssueContractProperties';
/** @since 2019-12-01 */
export interface IssueContract extends Resource {
    /** @since 2019-12-01 */
    properties: IssueContractProperties;
}
