import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the resource requested violates the precepts of this API.
 */
export interface DisallowedResourceProblem extends ProblemFields {
    resource_id?: string;
    resource_type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    section?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
