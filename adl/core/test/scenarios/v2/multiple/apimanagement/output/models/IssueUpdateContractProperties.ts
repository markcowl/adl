import { IssueContractBaseProperties } from './IssueContractBaseProperties';
/**
 * 
 * @description Issue contract Update Properties.
 */
export interface IssueUpdateContractProperties extends IssueContractBaseProperties {
    /**
     * 
     * @description The issue title.
     */
    title: any;
    /**
     * 
     * @description Text describing the issue.
     */
    description: any;
    /**
     * 
     * @description A resource identifier for the user created the issue.
     */
    userId: any;
}
