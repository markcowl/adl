import { PortalSigninSettingProperties } from './PortalSigninSettingProperties';
import { Resource } from './Resource';
/**
 * @description Sign-In settings for the Developer Portal.
 */
export interface PortalSigninSettings extends Resource {
    /**
     * @description Sign-in settings contract properties.
     */
    properties: PortalSigninSettingProperties;
}
