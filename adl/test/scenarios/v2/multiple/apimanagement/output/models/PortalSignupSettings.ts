import { Resource } from './Resource';
import { PortalSignupSettingsProperties } from './PortalSignupSettingsProperties';
/**
 * @description Sign-Up settings for a developer portal.
 */
export interface PortalSignupSettings extends Resource {
    /**
     * @description Sign-up settings contract properties.
     */
    properties: PortalSignupSettingsProperties;
}
