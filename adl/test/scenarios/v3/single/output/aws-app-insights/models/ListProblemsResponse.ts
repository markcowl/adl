import { Problem } from './Problem';
/**
 * @since 2018-11-25
 */
export interface ListProblemsResponse {
    /** @since 2018-11-25 */
    ProblemList: Array<Problem>;
    /** @since 2018-11-25 */
    NextToken: string;
}
