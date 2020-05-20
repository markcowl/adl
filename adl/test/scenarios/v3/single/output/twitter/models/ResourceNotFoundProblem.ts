import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a given Tweet, User, etc. does not exist.
 */
export interface ResourceNotFoundProblem extends ProblemFields {
    parameter?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    resource_type?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Value will match the schema of the field.
     */
    value?: any;
}
