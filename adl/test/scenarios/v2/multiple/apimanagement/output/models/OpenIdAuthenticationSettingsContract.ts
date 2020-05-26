import { bearerTokenSendingMethods } from '../enums/bearerTokenSendingMethods';
/** @since 2019-12-01 */
export interface OpenIdAuthenticationSettingsContract {
    /** @since 2019-12-01 */
    openidProviderId: string;
    /** @since 2019-12-01 */
    bearerTokenSendingMethods: Array<bearerTokenSendingMethods>;
}
