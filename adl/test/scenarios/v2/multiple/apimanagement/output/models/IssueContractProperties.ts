import { IssueContractBaseProperties } from './IssueContractBaseProperties';
/**
 * @description Issue contract Properties.
 */
export interface IssueContractProperties extends IssueContractBaseProperties {
    /**
     * @description The issue title.
     */
    title?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Text describing the issue.
     */
    description?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A resource identifier for the user created the issue.
     */
    userId?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
