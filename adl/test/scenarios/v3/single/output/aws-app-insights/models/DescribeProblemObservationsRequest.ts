
/**
 * DescribeProblemObservationsRequest
 */
export interface DescribeProblemObservationsRequest {
    /**
     * @description The ID of the problem.
     */
    ProblemId?: string & MaxLength<38> & MinLength<38> & RegularExpression<"p-[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}">;
}
