
/** @since 2019-12-01 */
export interface CacheContractProperties {
    /** @since 2019-12-01 */
    description: string & MaxLength<2000>;
    /** @since 2019-12-01 */
    connectionString?: string & MaxLength<300>;
    /** @since 2019-12-01 */
    resourceId: string & MaxLength<2000>;
}
