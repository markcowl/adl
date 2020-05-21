import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a given Tweet, User, etc. does not exist.
 */
export interface ResourceNotFoundProblem extends ProblemFields {
    parameter?: string & MinLength<1>;
    resource_type?: "user" | "tweet";
    type: "https://api.twitter.com/labs/2/problems/resource-not-found";
    /**
     * @description Value will match the schema of the field.
     */
    value?: any;
}
