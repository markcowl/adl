import { bearerTokenSendingMethods } from '../enums/bearerTokenSendingMethods';
/**
 * @description API OAuth2 Authentication settings details.
 */
export interface OpenIdAuthenticationSettingsContract {
    /**
     * @description OAuth authorization server identifier.
     */
    openidProviderId: string;
    /**
     * @description How to send token to the server.
     */
    bearerTokenSendingMethods: Array<bearerTokenSendingMethods>;
}
