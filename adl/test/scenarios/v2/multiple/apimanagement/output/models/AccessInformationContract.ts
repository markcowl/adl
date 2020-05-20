
/**
 * @description Tenant access information contract of the API Management service.
 */
export interface AccessInformationContract {
    /**
     * @description Identifier.
     */
    id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    primaryKey: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    secondaryKey: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Determines whether direct access is enabled.
     */
    enabled: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
