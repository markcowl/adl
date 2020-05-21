import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that the authentication used is not supported.
 */
export interface UnsupportedAuthenticationProblem extends ProblemFields {
    type: "https://api.twitter.com/labs/2/problems/unsupported-authentication";
}
