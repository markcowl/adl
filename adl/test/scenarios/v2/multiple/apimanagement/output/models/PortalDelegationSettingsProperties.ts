import { SubscriptionsDelegationSettingsProperties } from './SubscriptionsDelegationSettingsProperties';
import { RegistrationDelegationSettingsProperties } from './RegistrationDelegationSettingsProperties';
/** @since 2019-12-01 */
export interface PortalDelegationSettingsProperties {
    /** @since 2019-12-01 */
    url: string;
    /** @since 2019-12-01 */
    validationKey: string;
    /** @since 2019-12-01 */
    subscriptions: SubscriptionsDelegationSettingsProperties;
    /** @since 2019-12-01 */
    userRegistration: RegistrationDelegationSettingsProperties;
}
