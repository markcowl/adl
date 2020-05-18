import { OAuth2AuthenticationSettingsContract } from './OAuth2AuthenticationSettingsContract';
import { OpenIdAuthenticationSettingsContract } from './OpenIdAuthenticationSettingsContract';
/**
 * @description API Authentication Settings.
 */
export interface AuthenticationSettingsContract {
    /**
     * @description OAuth2 Authentication settings
     */
    oAuth2: OAuth2AuthenticationSettingsContract;
    /**
     * @description OpenID Connect Authentication Settings
     */
    openid: OpenIdAuthenticationSettingsContract;
}
