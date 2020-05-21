import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 */
export interface ResourceUnauthorizedProblem extends ProblemFields {
    resource_id?: string;
    resource_type?: "tweet";
    section?: "data" | "includes";
    type: "https://api.twitter.com/labs/2/problems/not-authorized-for-resource";
}
