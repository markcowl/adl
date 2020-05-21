import { PortalSignupSettingsProperties } from './PortalSignupSettingsProperties';
import { Resource } from './Resource';
/**
 * @description Sign-Up settings for a developer portal.
 */
export interface PortalSignupSettings extends Resource {
    /**
     * @description Sign-up settings contract properties.
     */
    properties: PortalSignupSettingsProperties;
}
