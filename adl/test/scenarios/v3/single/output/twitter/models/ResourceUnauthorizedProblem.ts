import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 */
export interface ResourceUnauthorizedProblem extends ProblemFields {
    resource_id?: string;
    resource_type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    section?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
