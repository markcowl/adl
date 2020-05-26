
/**
 * UpdateComponentConfigurationRequest
 * @since 2018-11-25
 */
export interface UpdateComponentConfigurationRequest {
    /** @since 2018-11-25 */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    ComponentName?: string;
    /** @since 2018-11-25 */
    Monitor: boolean;
    /** @since 2018-11-25 */
    Tier: Tier;
    /** @since 2018-11-25 */
    ComponentConfiguration: string & MaxLength<10000> & MinLength<1>;
}
