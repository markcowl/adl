import { Resource } from './Resource';
import { PortalSignupSettingsProperties } from './PortalSignupSettingsProperties';
/**
 * @description Sign-Up settings for a developer portal.
 * @since 2019-12-01
 */
export interface PortalSignupSettings extends Resource {
    /**
     * @description Sign-up settings contract properties.
     * @since 2019-12-01
     */
    properties: PortalSignupSettingsProperties;
}
