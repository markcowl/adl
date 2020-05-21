import { Problem } from './Problem';
export interface ListProblemsResponse {
    /**
     * @description The list of problems.
     */
    ProblemList: Array<Problem>;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
