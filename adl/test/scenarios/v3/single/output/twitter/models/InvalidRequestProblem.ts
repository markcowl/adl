import { ProblemFields } from './ProblemFields';
/**
 * @description A problem that indicates this request is invalid.
 */
export interface InvalidRequestProblem extends ProblemFields {
    errors: Array<{
        message: string;
        parameters: Dictionary<Array<string>>;
    }>;
    type: "https://api.twitter.com/labs/2/problems/invalid-request";
}
