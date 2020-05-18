
/**
 * @description Tenant access information contract of the API Management service.
 */
export interface AccessInformationContract {
    /**
     * @description Identifier.
     */
    id: any;
    /**
     * @description Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    primaryKey: any;
    /**
     * @description Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    secondaryKey: any;
    /**
     * @description Determines whether direct access is enabled.
     */
    enabled: any;
}
