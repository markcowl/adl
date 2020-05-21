import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the resource requested violates the precepts of this API.
 */
export interface DisallowedResourceProblem extends ProblemFields {
    resource_id?: string;
    resource_type?: "tweet";
    section?: "data" | "includes";
    type: "https://api.twitter.com/labs/2/problems/disallowed-resource";
}
