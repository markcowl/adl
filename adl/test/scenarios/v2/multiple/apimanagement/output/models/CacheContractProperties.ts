
/**
 * @description Properties of the Cache contract.
 */
export interface CacheContractProperties {
    /**
     * @description Cache description
     */
    description: string & MaxLength<2000>;
    /**
     * @description Runtime connection string to cache
     */
    connectionString?: string & MaxLength<300>;
    /**
     * @description Original uri of entity in external system cache points to
     */
    resourceId: string & MaxLength<2000>;
}
