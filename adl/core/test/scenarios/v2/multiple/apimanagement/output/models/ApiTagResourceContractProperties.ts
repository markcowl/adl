import { ApiEntityBaseContract } from './ApiEntityBaseContract';
/**
 * 
 * @description API contract properties for the Tag Resources.
 */
export interface ApiTagResourceContractProperties extends ApiEntityBaseContract {
    /**
     * 
     * @description API identifier in the form /apis/{apiId}.
     */
    id: any;
    /**
     * 
     * @description API name.
     */
    name: any;
    /**
     * 
     * @description Absolute URL of the backend service implementing this API.
     */
    serviceUrl: any;
    /**
     * 
     * @description Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    path: any;
    /**
     * 
     * @description Describes on which protocols the operations in this API can be invoked.
     */
    protocols: any;
}
