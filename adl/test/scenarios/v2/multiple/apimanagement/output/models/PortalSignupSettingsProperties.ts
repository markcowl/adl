import { TermsOfServiceProperties } from './TermsOfServiceProperties';
/**
 * @description Sign-up settings contract properties.
 */
export interface PortalSignupSettingsProperties {
    /**
     * @description Allow users to sign up on a developer portal.
     */
    enabled: any;
    /**
     * @description Terms of service contract properties.
     */
    termsOfService: TermsOfServiceProperties;
}
