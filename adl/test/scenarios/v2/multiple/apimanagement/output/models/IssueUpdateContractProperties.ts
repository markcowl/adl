import { IssueContractBaseProperties } from './IssueContractBaseProperties';
/**
 * @description Issue contract Update Properties.
 */
export interface IssueUpdateContractProperties extends IssueContractBaseProperties {
    /**
     * @description The issue title.
     */
    title: string;
    /**
     * @description Text describing the issue.
     */
    description: string;
    /**
     * @description A resource identifier for the user created the issue.
     */
    userId: string;
}
