import { ProblemFields } from './ProblemFields';
/** @since 2.3 */
export interface UnsupportedAuthenticationProblem extends ProblemFields {
    /**
     * @since 2.3
     */
    type: "https://api.twitter.com/labs/2/problems/unsupported-authentication";
}
