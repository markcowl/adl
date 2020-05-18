import { ApiEntityBaseContract } from './ApiEntityBaseContract';
import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
/**
 * @description Api Entity Properties
 */
export interface ApiContractProperties extends ApiEntityBaseContract {
    /**
     * @description API identifier of the source API.
     */
    sourceApiId: any;
    /**
     * @description API name. Must be 1 to 300 characters long.
     */
    displayName: any;
    /**
     * @description Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
     */
    serviceUrl: any;
    /**
     * @description Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    path?: any;
    /**
     * @description Describes on which protocols the operations in this API can be invoked.
     */
    protocols: any;
    /**
     * @description Version set details
     */
    apiVersionSet: ApiVersionSetContractDetails;
}
