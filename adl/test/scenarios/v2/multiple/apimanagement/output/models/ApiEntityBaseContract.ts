import { ApiType } from '../enums/ApiType';
import { AuthenticationSettingsContract } from './AuthenticationSettingsContract';
import { SubscriptionKeyParameterNamesContract } from './SubscriptionKeyParameterNamesContract';
/**
 * @description API base contract details.
 */
export interface ApiEntityBaseContract {
    /**
     * @description Description of the API. May include HTML formatting tags.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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
    apiRevision: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates the Version identifier of the API if the API is versioned
     */
    apiVersion: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates if API revision is current api revision.
     */
    isCurrent: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Indicates if API revision is accessible via the gateway.
     */
    readonly isOnline: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Description of the Api Revision.
     */
    apiRevisionDescription: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Description of the Api Version.
     */
    apiVersionDescription: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A resource identifier for the related ApiVersionSet.
     */
    apiVersionSetId: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Specifies whether an API or Product subscription is required for accessing the API.
     */
    subscriptionRequired: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
