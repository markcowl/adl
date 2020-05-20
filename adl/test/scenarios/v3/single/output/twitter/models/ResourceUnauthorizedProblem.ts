import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 */
export interface ResourceUnauthorizedProblem extends ProblemFields {
    resource_id?: any;
    resource_type?: any;
    section?: any;
    type: any;
}
