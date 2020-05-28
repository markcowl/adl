
/**
 * DescribeProblemRequest
 * @since 2018-11-25
 */
export interface DescribeProblemRequest {
    /**
     * @description The ID of the problem.
     * @since 2018-11-25
     */
    ProblemId?: string & MaxLength<38> & MinLength<38> & RegularExpression<"p-[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}">;
}
