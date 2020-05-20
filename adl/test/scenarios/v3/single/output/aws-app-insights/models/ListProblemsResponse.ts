export interface ListProblemsResponse {
    /**
     * @description The list of problems.
     */
    ProblemList: unknown /*= (not tsschema -- undefinedProblemList/undefined ) =*/;
    /**
     * @description The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
     */
    NextToken: string;
}
