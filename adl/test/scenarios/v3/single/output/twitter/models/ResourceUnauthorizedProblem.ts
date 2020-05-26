import { ProblemFields } from './ProblemFields';
/** @since 2.3 */
export interface ResourceUnauthorizedProblem extends ProblemFields {
    /**
     * @since 2.3
     */
    resource_id?: string;
    /**
     * @since 2.3
     */
    resource_type?: "tweet";
    /**
     * @since 2.3
     */
    section?: "data" | "includes";
    /**
     * @since 2.3
     */
    type: "https://api.twitter.com/labs/2/problems/not-authorized-for-resource";
}
