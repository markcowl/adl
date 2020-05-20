import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a given Tweet, User, etc. does not exist.
 */
export interface ResourceNotFoundProblem extends ProblemFields {
    parameter?: any;
    resource_type?: any;
    type: any;
    /**
     * @description Value will match the schema of the field.
     */
    value?: any;
}
