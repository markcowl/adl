
/**
 * DescribeObservationRequest
 * @since 2018-11-25
 */
export interface DescribeObservationRequest {
    /** @since 2018-11-25 */
    ObservationId?: string & MaxLength<38> & MinLength<38> & RegularExpression<"o-[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}">;
}
