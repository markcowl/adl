import { AuthenticationSettingsContract } from './AuthenticationSettingsContract';
import { SubscriptionKeyParameterNamesContract } from './SubscriptionKeyParameterNamesContract';
/**
 * @description API base contract details.
 */
export interface ApiEntityBaseContract {
    /**
     * @description Description of the API. May include HTML formatting tags.
     */
    description: any;
    /**
     * @description Collection of authentication settings included into this API.
     */
    authenticationSettings: AuthenticationSettingsContract;
    /**
     * @description Protocols over which API is made available.
     */
    subscriptionKeyParameterNames: SubscriptionKeyParameterNamesContract;
    /**
     * @description Type of API.
     * @clientName ApiType
     */
    type: ApiType;
    /**
     * @description Describes the Revision of the Api. If no value is provided, default revision 1 is created
     */
    apiRevision: any;
    /**
     * @description Indicates the Version identifier of the API if the API is versioned
     */
    apiVersion: any;
    /**
     * @description Indicates if API revision is current api revision.
     */
    isCurrent: any;
    /**
     * @description Indicates if API revision is accessible via the gateway.
     */
    readonly isOnline: any;
    /**
     * @description Description of the Api Revision.
     */
    apiRevisionDescription: any;
    /**
     * @description Description of the Api Version.
     */
    apiVersionDescription: any;
    /**
     * @description A resource identifier for the related ApiVersionSet.
     */
    apiVersionSetId: any;
    /**
     * @description Specifies whether an API or Product subscription is required for accessing the API.
     */
    subscriptionRequired: any;
}
