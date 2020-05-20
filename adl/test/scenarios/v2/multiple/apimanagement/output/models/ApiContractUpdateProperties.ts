import { ApiEntityBaseContract } from './ApiEntityBaseContract';
/**
 * @description API update contract properties.
 */
export interface ApiContractUpdateProperties extends ApiEntityBaseContract {
    /**
     * @description API name.
     */
    displayName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Absolute URL of the backend service implementing this API.
     */
    serviceUrl: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    path: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Describes on which protocols the operations in this API can be invoked.
     */
    protocols: unknown /*= (not tsschema -- undefinedprotocols/undefined ) =*/;
}
