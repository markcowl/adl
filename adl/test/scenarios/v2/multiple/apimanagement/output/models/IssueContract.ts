import { Resource } from './Resource';
import { IssueContractProperties } from './IssueContractProperties';
/**
 * @description Issue Contract details.
 */
export interface IssueContract extends Resource {
    /**
     * @description Properties of the Issue.
     */
    properties: IssueContractProperties;
}
