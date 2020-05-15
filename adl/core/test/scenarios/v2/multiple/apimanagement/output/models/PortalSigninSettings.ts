import { Resource } from './Resource';
import { PortalSigninSettingProperties } from './PortalSigninSettingProperties';
/**
 * 
 * @description Sign-In settings for the Developer Portal.
 */
export interface PortalSigninSettings extends Resource {
    /**
     * 
     * @description Sign-in settings contract properties.
     */
    properties: PortalSigninSettingProperties;
}
