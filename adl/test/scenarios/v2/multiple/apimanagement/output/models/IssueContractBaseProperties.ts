import { State } from '../enums/State';
/**
 * @description Issue contract Base Properties.
 */
export interface IssueContractBaseProperties {
    /**
     * @description Date and time when the issue was created.
     */
    createdDate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Status of the issue.
     */
    state: State;
    /**
     * @description A resource identifier for the API the issue was created for.
     */
    apiId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
