
/**
 * @since 2018-11-25
 */
export interface DescribeComponentConfigurationRecommendationResponse {
    /**
     * @description The recommended configuration settings of the component. The value is the escaped JSON of the configuration.
     * @since 2018-11-25
     */
    ComponentConfiguration: string & MaxLength<10000> & MinLength<1>;
}
