
/**
 * @since 2018-11-25
 */
export interface DescribeComponentConfigurationRecommendationResponse {
    /** @since 2018-11-25 */
    ComponentConfiguration: string & MaxLength<10000> & MinLength<1>;
}
