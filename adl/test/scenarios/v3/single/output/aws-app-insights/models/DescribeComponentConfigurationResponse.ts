
/**
 * @since 2018-11-25
 */
export interface DescribeComponentConfigurationResponse {
    /** @since 2018-11-25 */
    Monitor: boolean;
    /** @since 2018-11-25 */
    Tier: Tier;
    /** @since 2018-11-25 */
    ComponentConfiguration: string & MaxLength<10000> & MinLength<1>;
}
