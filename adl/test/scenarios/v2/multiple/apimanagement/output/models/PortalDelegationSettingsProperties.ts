import { RegistrationDelegationSettingsProperties } from './RegistrationDelegationSettingsProperties';
import { SubscriptionsDelegationSettingsProperties } from './SubscriptionsDelegationSettingsProperties';
/**
 * @description Delegation settings contract properties.
 */
export interface PortalDelegationSettingsProperties {
    /**
     * @description A delegation Url.
     */
    url: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description A base64-encoded validation key to validate, that a request is coming from Azure API Management.
     */
    validationKey: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Subscriptions delegation settings.
     */
    subscriptions: SubscriptionsDelegationSettingsProperties;
    /**
     * @description User registration delegation settings.
     */
    userRegistration: RegistrationDelegationSettingsProperties;
}
