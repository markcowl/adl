import { SubscriptionsDelegationSettingsProperties } from './SubscriptionsDelegationSettingsProperties';
import { RegistrationDelegationSettingsProperties } from './RegistrationDelegationSettingsProperties';
/**
 * 
 * @description Delegation settings contract properties.
 */
export interface PortalDelegationSettingsProperties {
    /**
     * 
     * @description A delegation Url.
     */
    url: any;
    /**
     * 
     * @description A base64-encoded validation key to validate, that a request is coming from Azure API Management.
     */
    validationKey: any;
    /**
     * 
     * @description Subscriptions delegation settings.
     */
    subscriptions: SubscriptionsDelegationSettingsProperties;
    /**
     * 
     * @description User registration delegation settings.
     */
    userRegistration: RegistrationDelegationSettingsProperties;
}
