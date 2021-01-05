
/**
 * @description Parameters body to pass for resource name availability check.
 * @since 2018-03-01
 */
export interface CheckNameAvailabilityParameters {
    /**
     * @description Resource name.
     * @since 2018-03-01
     */
    name: string;
    /**
     * @description Resource type. The only legal value of this property for checking redis cache name availability is 'Microsoft.Cache/redis'.
     * @since 2018-03-01
     */
    type: string;
}
