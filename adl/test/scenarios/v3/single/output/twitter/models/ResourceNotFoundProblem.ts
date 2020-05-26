import { ProblemFields } from './ProblemFields';
/** @since 2.3 */
export interface ResourceNotFoundProblem extends ProblemFields {
    /**
     * @since 2.3
     */
    parameter?: string & MinLength<1>;
    /**
     * @since 2.3
     */
    resource_type?: "user" | "tweet";
    /**
     * @since 2.3
     */
    type: "https://api.twitter.com/labs/2/problems/resource-not-found";
    /** @since 2.3 */
    value?: any;
}
