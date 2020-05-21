import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates that a usage cap has been exceeded.
 */
export interface UsageCapExceededProblem extends ProblemFields {
    period: "Daily" | "Monthly";
    scope: "Account" | "Product";
    type: "https://api.twitter.com/labs/2/problems/usage-capped";
}
