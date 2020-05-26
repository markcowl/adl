import { ProblemFields } from './ProblemFields';
/** @since 2.3 */
export interface GenericProblem extends ProblemFields {
    /**
     * @since 2.3
     */
    status?: int64;
    /**
     * @since 2.3
     */
    type: "about:blank";
}
