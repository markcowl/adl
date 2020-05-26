import { OAuth2AuthenticationSettingsContract } from './OAuth2AuthenticationSettingsContract';
import { OpenIdAuthenticationSettingsContract } from './OpenIdAuthenticationSettingsContract';
/** @since 2019-12-01 */
export interface AuthenticationSettingsContract {
    /** @since 2019-12-01 */
    oAuth2: OAuth2AuthenticationSettingsContract;
    /** @since 2019-12-01 */
    openid: OpenIdAuthenticationSettingsContract;
}
