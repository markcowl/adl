import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the resource requested violates the precepts of this API.
 */
export interface DisallowedResourceProblem extends ProblemFields {
    resource_id?: any;
    resource_type?: any;
    section?: any;
    type: any;
}
